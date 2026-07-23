import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  const filled = element.filled ?? false;
  const reversed = element.reversed ?? false;

  let background = 'transparent';
  let border = '2px solid black';

  if (filled && !reversed) {
    background = 'black';
    border = 'none';
  } else if (filled && reversed) {
    // ^FR inverts a filled rect: solid black becomes solid white
    background = 'white';
    border = 'none';
  }

  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      background,
      border,
      boxSizing: 'border-box',
    }} />
  );
}
