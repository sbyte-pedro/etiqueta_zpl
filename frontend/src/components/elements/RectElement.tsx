import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  const filled = element.filled ?? false;
  const reversed = element.reversed ?? false;

  // ^FR on a filled box inverts dots: renders white over whatever is beneath it
  const bg = filled
    ? (reversed ? 'white' : 'black')
    : 'transparent';

  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      background: bg,
      border: filled ? 'none' : '2px solid black',
      boxSizing: 'border-box',
    }} />
  );
}
