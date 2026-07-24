import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function TextElement({ element, scale }: Props) {
  const fontSize = (element.fontSize ?? 30) * scale;
  const reversed = element.reversed ?? false;
  return (
    <div
      style={{
        width: element.width * scale,
        height: element.height * scale,
        fontSize: Math.max(8, fontSize),
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        userSelect: 'none',
        background: reversed ? 'black' : 'transparent',
        color: reversed ? 'white' : 'black',
      }}
    >
      {element.value || 'Text'}
    </div>
  );
}
