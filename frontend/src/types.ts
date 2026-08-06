export type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'line' | 'comment';

export interface DesignElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
  fontSize?: number;
  fontName?: string;
  fontSource?: 'cf' | 'a';
  reversed?: boolean;
  filled?: boolean;
  thickness?: number;
  dynamic?: boolean;
  variableName?: string;
}

// Text shown on the canvas for value-bearing elements. Dynamic elements
// render their {{variableName}} placeholder rather than a static value.
export const displayValue = (el: DesignElement): string | undefined =>
  el.dynamic && el.variableName ? `{{${el.variableName}}}` : el.value;
