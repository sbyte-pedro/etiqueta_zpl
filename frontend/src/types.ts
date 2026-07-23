export type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'line' | 'image-placeholder' | 'comment';

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
  reversed?: boolean;
  filled?: boolean;
}
