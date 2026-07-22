import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function LineElement({ element, scale }: Props) {
  const w = element.width * scale;
  const h = element.height * scale;
  // Horizontal if wider than tall, vertical otherwise
  const isHorizontal = w >= h;
  return (
    <div style={{
      width: w,
      height: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: isHorizontal ? '100%' : 3,
        height: isHorizontal ? 3 : '100%',
        background: 'black',
      }} />
    </div>
  );
}
