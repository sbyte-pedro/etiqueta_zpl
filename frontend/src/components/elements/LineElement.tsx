import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function LineElement({ element, scale }: Props) {
  const w = element.width * scale;
  const h = element.height * scale;
  const isHorizontal = w >= h;
  const thickness = (element.thickness ?? Math.min(element.width, element.height)) * scale;
  return (
    <div style={{
      width: w,
      height: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: isHorizontal ? '100%' : thickness,
        height: isHorizontal ? thickness : '100%',
        background: 'black',
      }} />
    </div>
  );
}
