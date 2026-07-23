import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  const filled = element.filled ?? false;
  const reversed = element.reversed ?? false;

  if (filled && reversed) {
    // ^FR inverts dot-level: white diff white = white (no-op on white bg);
    // white diff black = white (shows white on black). Simulate with difference blend.
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
