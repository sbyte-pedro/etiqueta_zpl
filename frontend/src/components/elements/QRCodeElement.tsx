import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function QRCodeElement({ element, scale }: Props) {
  const [src, setSrc] = useState('');
  const size = Math.max(element.width, element.height) * scale;
  const isDynamic = element.dynamic && element.variableName;

  useEffect(() => {
    if (isDynamic) return;
    QRCode.toDataURL(element.value || 'https://example.com', { width: size, margin: 1 })
      .then(setSrc)
      .catch(() => setSrc(''));
  }, [element.value, size, isDynamic]);

  if (isDynamic) {
    return (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed #9ca3af',
          background: '#f9fafb',
          userSelect: 'none',
          overflow: 'hidden',
          textAlign: 'center',
          padding: 4,
          boxSizing: 'border-box',
        }}
      >
        <span style={{ fontSize: Math.max(10, size * 0.12), fontFamily: 'monospace', color: '#374151', wordBreak: 'break-all' }}>
          {`{{${element.variableName}}}`}
        </span>
        <span style={{ fontSize: Math.max(9, size * 0.09), color: '#9ca3af' }}>qr</span>
      </div>
    );
  }

  return (
    <div style={{ width: size, height: size }}>
      {src && <img src={src} alt="QR" style={{ width: size, height: size }} />}
    </div>
  );
}
