import React from 'react';
import { DesignElement } from '../../types';
import { getZplFont } from '../../utils/zplFonts';

interface Props { element: DesignElement; scale: number; }

export function TextElement({ element, scale }: Props) {
  const fontSize = (element.fontSize ?? 30) * scale;
  const reversed = element.reversed ?? false;
  const font = getZplFont(element.fontName);
  return (
    <div
      style={{
        width: element.width * scale,
        height: element.height * scale,
        fontFamily: font.cssFamily,
        fontSize: Math.max(8, fontSize),
        fontWeight: font.fontWeight,
        textTransform: font.textTransform,
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
