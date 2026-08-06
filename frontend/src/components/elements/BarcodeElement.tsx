import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function BarcodeElement({ element, scale }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const containerWidth = element.width * scale;
  const containerHeight = element.height * scale;
  const textHeight = Math.max(12, containerHeight * 0.1);
  const barsHeight = containerHeight - textHeight - 4;
  const isDynamic = element.dynamic && element.variableName;

  useEffect(() => {
    if (isDynamic || !ref.current) return;
    try {
      JsBarcode(ref.current, element.value || '000000', {
        format: 'CODE128',
        width: 2,
        height: barsHeight,
        displayValue: false,
        margin: 0,
      });
      // Scale bars to fill container width, preserving bar height
      const naturalW = parseFloat(ref.current.getAttribute('width') ?? '0');
      const naturalH = parseFloat(ref.current.getAttribute('height') ?? '0');
      if (naturalW > 0 && naturalH > 0) {
        ref.current.setAttribute('viewBox', `0 0 ${naturalW} ${naturalH}`);
        ref.current.setAttribute('preserveAspectRatio', 'none');
        ref.current.removeAttribute('width');
        ref.current.removeAttribute('height');
      }
    } catch (e) {
      // invalid barcode value
    }
  }, [element.value, containerWidth, barsHeight, isDynamic]);

  if (isDynamic) {
    return (
      <div
        style={{
          width: containerWidth,
          height: containerHeight,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed #9ca3af',
          background: '#f9fafb',
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        <span style={{ fontSize: Math.max(10, textHeight), fontFamily: 'monospace', color: '#374151' }}>
          {`{{${element.variableName}}}`}
        </span>
        <span style={{ fontSize: Math.max(9, textHeight * 0.8), color: '#9ca3af' }}>barcode</span>
      </div>
    );
  }

  return (
    <div style={{ width: containerWidth, height: containerHeight, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg ref={ref} style={{ width: containerWidth, height: barsHeight }} />
      <span style={{ fontSize: textHeight, fontFamily: 'monospace', marginTop: 2, userSelect: 'none' }}>
        {element.value || '000000'}
      </span>
    </div>
  );
}
