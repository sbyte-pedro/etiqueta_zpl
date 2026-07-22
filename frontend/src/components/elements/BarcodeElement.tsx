import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function BarcodeElement({ element, scale }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    try {
      JsBarcode(ref.current, element.value || '000000', {
        format: 'CODE128',
        width: 1.5,
        height: (element.height * scale) - 20,
        displayValue: true,
        fontSize: 10,
        margin: 0,
      });
    } catch (e) {
      // invalid barcode value — render blank
    }
  }, [element.value, element.height, scale]);

  return (
    <div style={{ width: element.width * scale, height: element.height * scale, overflow: 'hidden' }}>
      <svg ref={ref} style={{ width: '100%' }} />
    </div>
  );
}
