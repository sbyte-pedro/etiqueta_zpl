export type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'image-placeholder';

export interface Element {
  id: string;
  type: ElementType;
  x: number;       // ZPL dots
  y: number;       // ZPL dots
  width: number;   // ZPL dots
  height: number;  // ZPL dots
  value?: string;
  fontSize?: number;
  fontName?: string;
}

export interface LabelDimensions {
  labelWidth: number;   // ZPL dots
  labelHeight: number;  // ZPL dots
}

export interface GenerateRequest extends LabelDimensions {
  elements: Element[];
}

export interface ParseResult extends LabelDimensions {
  elements: Element[];
  unknownCommands: string[];
}
