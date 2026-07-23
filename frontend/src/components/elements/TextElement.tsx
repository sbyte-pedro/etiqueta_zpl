import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function TextElement({ element, scale }: Props) {
  const fontSize = ((element.fontSize ?? 30) * scale) / 2;
  const reversed = element.reversed ?? false;
  return (
    <div
      style={{
        minWidth: element.width * scale,
        width: 'max-content',
        height: element.height * scale,
        fontSize: Math.max(8, fontSize),
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        background: reversed ? 'black' : 'transparent',
        color: reversed ? 'white' : 'black',
      }}
    >
      {element.value || 'Text'}
    </div>
  );
}
