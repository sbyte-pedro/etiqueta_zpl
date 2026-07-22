import { Element, ParseResult } from './types';

let counter = 0;

function nextId(): string {
  counter += 1;
  return `parsed-${counter}`;
}

export function parseZpl(zpl: string): ParseResult {
  // Reset counter for each call
  counter = 0;

  let labelWidth = 0;
  let labelHeight = 0;
  const elements: Element[] = [];
  const unknownCommands: string[] = [];
  const matched = new Set<string>();

  // 1. Label width
  const pwRegex = /\^PW(\d+)/g;
  let m: RegExpExecArray | null;
  while ((m = pwRegex.exec(zpl)) !== null) {
    labelWidth = parseInt(m[1], 10);
    matched.add(m[0]);
  }

  // 2. Label height
  const llRegex = /\^LL(\d+)/g;
  while ((m = llRegex.exec(zpl)) !== null) {
    labelHeight = parseInt(m[1], 10);
    matched.add(m[0]);
  }

  // 3. Text: ^FO(\d+),(\d+)^A(\w)N,(\d+),\d+^FD([^^]*)^FS
  const textRegex = /\^FO(\d+),(\d+)\^A(\w)N,(\d+),\d+\^FD([^^]*)\^FS/g;
  while ((m = textRegex.exec(zpl)) !== null) {
    const x = parseInt(m[1], 10);
    const y = parseInt(m[2], 10);
    const fontName = m[3];
    const fontSize = parseInt(m[4], 10);
    const value = m[5];
    elements.push({
      id: nextId(),
      type: 'text',
      x,
      y,
      width: 200,
      height: fontSize + 10,
      value,
      fontSize,
      fontName,
    });
    matched.add(m[0]);
  }

  // 4. Barcode128: ^FO(\d+),(\d+)^BCN,(\d+),Y,N,N^FD([^^]*)^FS
  const barcodeRegex = /\^FO(\d+),(\d+)\^BCN,(\d+),Y,N,N\^FD([^^]*)\^FS/g;
  while ((m = barcodeRegex.exec(zpl)) !== null) {
    const x = parseInt(m[1], 10);
    const y = parseInt(m[2], 10);
    const height = parseInt(m[3], 10);
    const value = m[4];
    elements.push({
      id: nextId(),
      type: 'barcode128',
      x,
      y,
      width: 300,
      height,
      value,
    });
    matched.add(m[0]);
  }

  // 5. QRCode: ^FO(\d+),(\d+)^BQN,\d+,(\d+)^FDMA,([^^]*)^FS
  const qrRegex = /\^FO(\d+),(\d+)\^BQN,\d+,(\d+)\^FDMA,([^^]*)\^FS/g;
  while ((m = qrRegex.exec(zpl)) !== null) {
    const x = parseInt(m[1], 10);
    const y = parseInt(m[2], 10);
    const mag = parseInt(m[3], 10);
    const value = m[4];
    elements.push({
      id: nextId(),
      type: 'qrcode',
      x,
      y,
      width: mag * 40,
      height: mag * 40,
      value,
    });
    matched.add(m[0]);
  }

  // 6. Image placeholder (BEFORE rect — more specific suffix ,3,B,5):
  // ^FO(\d+),(\d+)^GB(\d+),(\d+),3,B,5^FS
  const imgRegex = /\^FO(\d+),(\d+)\^GB(\d+),(\d+),3,B,5\^FS/g;
  while ((m = imgRegex.exec(zpl)) !== null) {
    const x = parseInt(m[1], 10);
    const y = parseInt(m[2], 10);
    const width = parseInt(m[3], 10);
    const height = parseInt(m[4], 10);
    elements.push({
      id: nextId(),
      type: 'image-placeholder',
      x,
      y,
      width,
      height,
    });
    matched.add(m[0]);
  }

  // 7. Rect: ^FO(\d+),(\d+)^GB(\d+),(\d+),8^FS
  const rectRegex = /\^FO(\d+),(\d+)\^GB(\d+),(\d+),8\^FS/g;
  while ((m = rectRegex.exec(zpl)) !== null) {
    const x = parseInt(m[1], 10);
    const y = parseInt(m[2], 10);
    const width = parseInt(m[3], 10);
    const height = parseInt(m[4], 10);
    elements.push({
      id: nextId(),
      type: 'rect',
      x,
      y,
      width,
      height,
    });
    matched.add(m[0]);
  }

  // 8. Collect unknown ^CMD patterns not already matched
  // Match any ^[A-Z][^\^]* token
  const cmdRegex = /\^[A-Z][^\^]*/g;
  while ((m = cmdRegex.exec(zpl)) !== null) {
    const token = m[0];
    // Skip structural commands and already-matched tokens
    if (token === '^XA' || token === '^XZ') continue;
    if (matched.has(token)) continue;
    // Check if this token was part of a matched longer string
    const alreadyMatched = [...matched].some((s) => s.includes(token));
    if (alreadyMatched) continue;
    unknownCommands.push(token);
  }

  return { labelWidth, labelHeight, elements, unknownCommands };
}
