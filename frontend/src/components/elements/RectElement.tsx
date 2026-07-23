import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  const reversed = element.reversed ?? false;
  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      border: '2px solid black',
      background: reversed ? 'black' : 'transparent',
    }} />
  );
}
