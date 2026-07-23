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
    // White shape on black background — approximate as white fill with heavy black border
    background = 'white';
    border = '4px solid black';
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
