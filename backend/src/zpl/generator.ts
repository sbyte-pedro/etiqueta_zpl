import { Element, GenerateRequest } from './types';

// Field data emitted into ^FD. Dynamic elements emit a {{variableName}}
// placeholder for the API caller to substitute; others emit their value.
const fieldData = (el: Element): string =>
  el.dynamic && el.variableName ? `{{${el.variableName}}}` : (el.value ?? '');

export function generateZpl(req: GenerateRequest): string {
  const lines: string[] = [
    '^XA',
    `^PW${req.labelWidth}`,
    `^LL${req.labelHeight}`,
  ];

  let cfFontName: string | null = null;
  let cfFontSize: number | null = null;

  for (const el of req.elements) {
    const fo = `^FO${el.x},${el.y}`;

    switch (el.type) {
      case 'text': {
        const fontName = el.fontName ?? '0';
        const fontSize = el.fontSize ?? 30;
        const data = fieldData(el);

        if (el.fontSource === 'cf') {
          // Emit or reuse a ^CF context line
          if (cfFontName !== fontName || cfFontSize !== fontSize) {
            lines.push(`^CF${fontName},${fontSize}`);
            cfFontName = fontName;
            cfFontSize = fontSize;
          }
          lines.push(`${fo}^FD${data}^FS`);
        } else {
          // Explicit ^A inline font — emit as before
          lines.push(`${fo}^A${fontName}N,${fontSize},${fontSize}^FD${data}^FS`);
        }
        break;
      }
      case 'barcode128': {
        const value = fieldData(el);
        const charCount = value.length || 8;
        // Code128 total modules = 11*(chars+2 start/check) + 13 stop = 11*chars + 35
        const totalModules = 11 * charCount + 35;
        const moduleWidth = Math.max(1, Math.floor(el.width / totalModules));
        lines.push(`${fo}^BY${moduleWidth}^BCN,${el.height},Y,N,N^FD${value}^FS`);
        break;
      }
      case 'qrcode': {
        const mag = Math.max(1, Math.min(10, Math.floor(el.width / 33)));
        lines.push(`${fo}^BQN,2,${mag}^FDMA,${fieldData(el)}^FS`);
        break;
      }
      case 'rect': {
        const thickness = el.filled ? Math.min(el.width, el.height) : (el.thickness ?? 8);
        const fr = el.reversed ? '^FR' : '';
        lines.push(`${fo}${fr}^GB${el.width},${el.height},${thickness}^FS`);
        break;
      }
      case 'line': {
        const t = el.thickness ?? Math.min(el.width, el.height);
        lines.push(`${fo}^GB${el.width},${el.height},${t}^FS`);
        break;
      }
      case 'comment': {
        lines.push(`^FX ${el.value ?? ''}`);
        break;
      }
      default: {
        const _exhaustive: never = el.type;
        break;
      }
    }
  }

  lines.push('^XZ');
  return lines.join('\n');
}
