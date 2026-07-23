import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  const filled = element.filled ?? false;
  const reversed = element.reversed ?? false;

  if (filled && reversed) {
    // ^FR inverts: paint solid white over whatever was drawn below
    return (
      <div style={{
        width: element.width * scale,
        height: element.height * scale,
        background: 'white',
        border: 'none',
        boxSizing: 'border-box',
      }} />
    );
  }

  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      background: filled ? 'black' : 'transparent',
      border: filled ? 'none' : '2px solid black',
      boxSizing: 'border-box',
    }} />
  );
}
