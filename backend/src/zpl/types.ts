export type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'line' | 'comment';

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
  fontSource?: 'cf' | 'a';
  reversed?: boolean;
  filled?: boolean;
  thickness?: number;  // ZPL dots; applies to line and non-filled rect border
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
