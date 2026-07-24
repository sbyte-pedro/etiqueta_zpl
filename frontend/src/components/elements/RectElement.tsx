import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  const filled = element.filled ?? false;
  const reversed = element.reversed ?? false;

  if (filled && reversed) {
    // ^FR XORs dots: white field on black = white, white field on white = black.
    // CSS difference blend achieves this only when NOT in an isolation group
    // (so it can see the white canvas background and turn white→black there).
    return (
      <div style={{
        width: element.width * scale,
        height: element.height * scale,
        background: 'white',
        border: 'none',
        boxSizing: 'border-box',
        mixBlendMode: 'difference',
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
