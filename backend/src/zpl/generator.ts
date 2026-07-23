import { Element, GenerateRequest } from './types';

function renderElement(el: Element): string {
  const fo = `^FO${el.x},${el.y}`;

  switch (el.type) {
    case 'text': {
      const fontName = el.fontName ?? '0';
      const fontSize = el.fontSize ?? 30;
      return `${fo}^A${fontName}N,${fontSize},${fontSize}^FD${el.value ?? ''}^FS`;
    }
    case 'barcode128': {
      return `${fo}^BCN,${el.height},Y,N,N^FD${el.value ?? ''}^FS`;
    }
    case 'qrcode': {
      const mag = Math.max(1, Math.round(el.width / 40));
      return `${fo}^BQN,2,${mag}^FDMA,${el.value ?? ''}^FS`;
    }
    case 'rect': {
      const thickness = el.filled ? Math.min(el.width, el.height) : 8;
      return `${fo}^GB${el.width},${el.height},${thickness}^FS`;
    }
    case 'line': {
      return `${fo}^GB${el.width},${el.height},3^FS`;
    }
    case 'image-placeholder': {
      return `${fo}^GB${el.width},${el.height},3,B,5^FS`;
    }
    case 'comment': {
      return `^FX ${el.value ?? ''}`;
    }
    default: {
      const _exhaustive: never = el.type;
      return '';
    }
  }
}

export function generateZpl(req: GenerateRequest): string {
  const lines: string[] = [
    '^XA',
    `^PW${req.labelWidth}`,
    `^LL${req.labelHeight}`,
    ...req.elements.map(renderElement),
    '^XZ',
  ];
  return lines.join('\n');
}
