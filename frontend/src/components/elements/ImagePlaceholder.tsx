import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function ImagePlaceholder({ element, scale }: Props) {
  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      border: '2px dashed #aaa',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaa',
      fontSize: 12,
      userSelect: 'none',
    }}>
      Image
    </div>
  );
}
