import React, { useCallback } from 'react';

type Direction = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

interface Props {
  direction: Direction;
  onResize: (dx: number, dy: number, dir: Direction) => void;
}

const CURSOR_MAP: Record<Direction, string> = {
  n: 'n-resize', s: 's-resize', e: 'e-resize', w: 'w-resize',
  ne: 'ne-resize', nw: 'nw-resize', se: 'se-resize', sw: 'sw-resize',
};

const POSITIONS: Record<Direction, React.CSSProperties> = {
  n:  { top: -4, left: '50%', transform: 'translateX(-50%)' },
  s:  { bottom: -4, left: '50%', transform: 'translateX(-50%)' },
  e:  { right: -4, top: '50%', transform: 'translateY(-50%)' },
  w:  { left: -4, top: '50%', transform: 'translateY(-50%)' },
  ne: { top: -4, right: -4 },
  nw: { top: -4, left: -4 },
  se: { bottom: -4, right: -4 },
  sw: { bottom: -4, left: -4 },
};

export function ResizeHandle({ direction, onResize }: Props) {
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;

    const onMove = (me: MouseEvent) => {
      onResize(me.clientX - startX, me.clientY - startY, direction);
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [direction, onResize]);

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        width: 8, height: 8,
        background: '#2563eb',
        border: '1px solid white',
        borderRadius: 2,
        cursor: CURSOR_MAP[direction],
        zIndex: 10,
        ...POSITIONS[direction],
      }}
    />
  );
}
