import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function QRCodeElement({ element, scale }: Props) {
  const [src, setSrc] = useState('');
  const size = Math.min(element.width, element.height) * scale;

  useEffect(() => {
    QRCode.toDataURL(element.value || 'https://example.com', { width: size, margin: 1 })
      .then(setSrc)
      .catch(() => setSrc(''));
  }, [element.value, size]);

  return (
    <div style={{ width: element.width * scale, height: element.height * scale }}>
      {src && <img src={src} alt="QR" style={{ width: size, height: size }} />}
    </div>
  );
}
