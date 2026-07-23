import { Element, ParseResult } from './types';

let counter = 0;
function nextId(): string {
  counter += 1;
  return `parsed-${counter}`;
}

// Split ZPL into command tokens. Each token starts with ^ or ~ and runs
// until the next ^ / ~ or end-of-string.
function tokenize(zpl: string): string[] {
  const tokens: string[] = [];
  const raw = zpl.replace(/\r\n|\r/g, '\n');
  // Split on ^ or ~ keeping the delimiter
  const parts = raw.split(/(?=\^|~)/);
  for (const p of parts) {
    const t = p.trim();
    if (t.startsWith('^') || t.startsWith('~')) tokens.push(t);
  }
  return tokens;
}

// Parse a comma-separated parameter list from the tail of a command token.
// e.g. "BCN,100,Y,N,N" → ["N","100","Y","N","N"]
function params(tail: string): string[] {
  return tail.split(',');
}

// Determine whether a ^GB is a line, rect, or solid-filled rect.
// Priority order:
//   1. w==t AND h==t         → filled solid rect (e.g. ^GB100,100,100)
//   2. w==t OR  h==t         → line (one thin dimension, e.g. ^GB700,3,3)
//   3. t >= min(w, h)        → filled rect (nearly solid)
//   4. otherwise             → rect (border)
function gbType(w: number, h: number, t: number): 'rect' | 'line' {
  if (w === t && h === t) return 'rect';
  if (w === t || h === t) return 'line';
  if (t >= Math.min(w, h)) return 'rect';
  return 'rect';
}

export function parseZpl(zpl: string): ParseResult {
  counter = 0;

  let labelWidth = 0;
  let labelHeight = 0;
  const elements: Element[] = [];
  const unknownCommands: string[] = [];

  // Stateful defaults that persist across fields (reset per label)
  let defaultFontName = '0';
  let defaultFontHeight = 30;
  let defaultFontWidth = 0;   // 0 = proportional

  // ^BY defaults for barcodes
  let byModuleWidth = 2;
  let byHeight = 10;

  // Field-level state — reset after every ^FS
  let fieldX = 0;
  let fieldY = 0;
  let fieldReversed = false;
  let fieldFontName = '';
  let fieldFontHeight = 0;
  let fieldFontWidth = 0;
  let fieldData = '';
  let fieldHasFont = false;
  // Pending barcode command (set between ^FO and ^FD)
  type PendingBarcode = { kind: 'bc128'; orientation: string; height: number; printLine: boolean } |
                        { kind: 'bqr';   orientation: string; model: number; mag: number };
  let pendingBarcode: PendingBarcode | null = null;

  function resetField() {
    fieldReversed = false;
    fieldFontName = '';
    fieldFontHeight = 0;
    fieldFontWidth = 0;
    fieldData = '';
    fieldHasFont = false;
    pendingBarcode = null;
  }

  const tokens = tokenize(zpl);
  const known = new Set<string>();

  for (const token of tokens) {
    // Extract command name (letters after ^) and the rest
    // ZPL commands are 1–2 uppercase letters; stop there so data (e.g. "Hello", "N,100") stays in tail
    const cmdMatch = token.match(/^\^([A-Z]{1,2})([\s\S]*)/);
    if (!cmdMatch) continue;
    const cmd = cmdMatch[1];
    const tail = cmdMatch[2].replace(/^\s*,?/, '');  // strip leading comma/space

    switch (cmd) {
      // ── Structural ──────────────────────────────────────────────────────────
      case 'XA':
      case 'XZ':
        known.add(cmd);
        break;

      // ── Label dimensions ────────────────────────────────────────────────────
      case 'PW':
        labelWidth = parseInt(tail, 10) || labelWidth;
        known.add(cmd);
        break;

      case 'LL': {
        const p = params(tail);
        labelHeight = parseInt(p[0], 10) || labelHeight;
        known.add(cmd);
        break;
      }

      // ── Default font (^CF fontName, height, width) ───────────────────────
      case 'CF': {
        const p = params(tail);
        if (p[0] !== undefined && p[0] !== '') defaultFontName = p[0];
        if (p[1] !== undefined && p[1] !== '') defaultFontHeight = parseInt(p[1], 10) || defaultFontHeight;
        if (p[2] !== undefined && p[2] !== '') defaultFontWidth = parseInt(p[2], 10) || 0;
        known.add(cmd);
        break;
      }

      // ── Field origin (^FO x, y, alignment) ──────────────────────────────
      case 'FO': {
        const p = params(tail);
        fieldX = parseInt(p[0], 10) || 0;
        fieldY = parseInt(p[1], 10) || 0;
        known.add(cmd);
        break;
      }

      // ── Field reverse print ──────────────────────────────────────────────
      case 'FR':
        fieldReversed = true;
        known.add(cmd);
        break;

      // ── Field font (^A fontName, height, width) ──────────────────────────
      case 'A': {
        // Tail may look like "0N,60,60" or "A,30" etc.
        // First char(s) before comma are fontName+orientation, rest are height, width
        const p = params(tail);
        // fontName is everything before digits in first param, orientation is last char
        const fontRaw = p[0] ?? '';
        // Strip trailing orientation letter (N/R/I/B) if present
        const fontName = fontRaw.replace(/[NRIB]$/, '') || defaultFontName;
        fieldFontName = fontName;
        fieldFontHeight = parseInt(p[1], 10) || defaultFontHeight;
        fieldFontWidth = parseInt(p[2], 10) || defaultFontWidth;
        fieldHasFont = true;
        known.add(cmd);
        break;
      }

      // ── Barcode defaults (^BY moduleWidth, widthRatio, height) ──────────
      case 'BY': {
        const p = params(tail);
        byModuleWidth = parseInt(p[0], 10) || byModuleWidth;
        // p[1] is widthRatio — not used for canvas sizing
        if (p[2] !== undefined && p[2] !== '') byHeight = parseInt(p[2], 10) || byHeight;
        known.add(cmd);
        break;
      }

      // ── Code 128 barcode (^BC orientation, height, line, lineAbove, checkDigit, mode) ─
      case 'BC': {
        const p = params(tail);
        const orientation = p[0] ?? 'N';
        // height defaults to ^BY height if omitted
        const height = (p[1] !== undefined && p[1] !== '') ? parseInt(p[1], 10) : byHeight;
        const printLine = (p[2] ?? 'Y').toUpperCase() !== 'N';
        pendingBarcode = { kind: 'bc128', orientation, height, printLine };
        known.add(cmd);
        break;
      }

      // ── QR code (^BQ orientation, model, magnification, ...) ───────────
      case 'BQ': {
        const p = params(tail);
        const orientation = p[0] ?? 'N';
        const model = parseInt(p[1], 10) || 2;
        const mag = parseInt(p[2], 10) || 2;
        pendingBarcode = { kind: 'bqr', orientation, model, mag };
        known.add(cmd);
        break;
      }

      // ── Field data (^FD data) ────────────────────────────────────────────
      case 'FD':
        // For QR, data looks like "MA,https://..." — strip the "MA," prefix
        fieldData = tail.startsWith('MA,') ? tail.slice(3) : tail;
        known.add(cmd);
        break;

      // ── Graphic box (^GB width, height, thickness, color, rounding) ─────
      case 'GB': {
        const p = params(tail);
        const w = parseInt(p[0], 10) || 1;
        const h = parseInt(p[1], 10) || 1;
        const t = parseInt(p[2], 10) || 1;
        const type = gbType(w, h, t);
        const isFilled = t >= Math.min(w, h);
        elements.push({
          id: nextId(),
          type,
          x: fieldX,
          y: fieldY,
          width: w,
          height: h,
          ...(isFilled ? { filled: true } : {}),
          ...(fieldReversed ? { reversed: true } : {}),
        });
        known.add(cmd);
        resetField();
        break;
      }

      // ── Field separator — emit the pending text or barcode element ───────
      case 'FS': {
        if (pendingBarcode) {
          if (pendingBarcode.kind === 'bc128') {
            elements.push({
              id: nextId(),
              type: 'barcode128',
              x: fieldX,
              y: fieldY,
              width: byModuleWidth * (11 * (fieldData.length || 8) + 35),
              height: pendingBarcode.height,
              value: fieldData,
              ...(fieldReversed ? { reversed: true } : {}),
            });
          } else {
            // QR size: mag * modules-per-side * dots-per-module
            // A typical QR version 1 is 21 modules; use mag * 21 * mag ≈ mag*mag*21
            // Simpler reliable estimate: mag * 80 dots (matches real label output well)
            const size = pendingBarcode.mag * 80;
            elements.push({
              id: nextId(),
              type: 'qrcode',
              x: fieldX,
              y: fieldY,
              width: size,
              height: size,
              value: fieldData,
              ...(fieldReversed ? { reversed: true } : {}),
            });
          }
        } else if (fieldData !== '') {
          // Text element — use field font if set, else default font
          const fontName = fieldHasFont ? fieldFontName : defaultFontName;
          const fontSize = fieldHasFont ? fieldFontHeight : defaultFontHeight;
          const fontWidth = fieldHasFont ? fieldFontWidth : defaultFontWidth;
          elements.push({
            id: nextId(),
            type: 'text',
            x: fieldX,
            y: fieldY,
            width: Math.max(200, Math.round(fontSize * 0.65 * fieldData.length)),
            height: fontSize + 10,
            value: fieldData,
            fontSize,
            fontName,
            ...(fieldReversed ? { reversed: true } : {}),
          });
        }
        known.add(cmd);
        resetField();
        break;
      }

      // ── Silently known (no canvas representation needed) ─────────────────
      case 'FX':   // comment — preserved as a comment element
        elements.push({
          id: nextId(),
          type: 'comment',
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          value: tail,
        });
        known.add(cmd);
        break;
      case 'CI':   // encoding
      case 'LH':   // label home
      case 'FN':   // field number
      case 'SN':   // serialized data
      case 'FP':   // field parameter
        known.add(cmd);
        break;

      default:
        unknownCommands.push(token);
        break;
    }
  }

  return { labelWidth, labelHeight, elements, unknownCommands };
}
