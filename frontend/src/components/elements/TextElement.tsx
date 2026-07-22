import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function TextElement({ element, scale }: Props) {
  const fontSize = ((element.fontSize ?? 30) * scale) / 2;
  return (
    <div
      style={{
        width: element.width * scale,
        height: element.height * scale,
        fontSize: Math.max(8, fontSize),
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      {element.value || 'Text'}
    </div>
  );
}
