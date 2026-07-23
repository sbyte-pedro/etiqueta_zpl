import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function BarcodeElement({ element, scale }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const containerWidth = element.width * scale;
  const containerHeight = element.height * scale;

  useEffect(() => {
    if (!ref.current) return;
    try {
      JsBarcode(ref.current, element.value || '000000', {
        format: 'CODE128',
        width: 2,
        height: containerHeight - 20,
        displayValue: true,
        fontSize: Math.max(8, containerHeight * 0.08),
        margin: 0,
      });
    } catch (e) {
      // invalid barcode value — render blank
    }
  }, [element.value, containerWidth, containerHeight]);

  return (
    <div style={{ width: containerWidth, height: containerHeight, overflow: 'hidden' }}>
      <svg ref={ref} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
