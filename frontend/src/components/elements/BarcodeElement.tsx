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
        height: containerHeight - 24,
        displayValue: true,
        fontSize: Math.max(10, containerHeight * 0.08),
        margin: 0,
      });
      // JsBarcode sets width/height attributes to its natural pixel size.
      // Read those, set them as viewBox, remove the attributes so CSS controls size.
      const w = parseFloat(ref.current.getAttribute('width') ?? '0');
      const h = parseFloat(ref.current.getAttribute('height') ?? '0');
      if (w > 0 && h > 0) {
        ref.current.setAttribute('viewBox', `0 0 ${w} ${h}`);
        ref.current.setAttribute('preserveAspectRatio', 'none');
        ref.current.removeAttribute('width');
        ref.current.removeAttribute('height');
      }
    } catch (e) {
      // invalid barcode value
    }
  }, [element.value, containerWidth, containerHeight]);

  return (
    <div style={{ width: containerWidth, height: containerHeight }}>
      <svg ref={ref} style={{ width: containerWidth, height: containerHeight }} />
    </div>
  );
}
