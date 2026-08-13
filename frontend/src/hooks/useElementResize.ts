import { useCallback, useRef } from 'react';
import { DesignElement } from '../types';

export function useElementResize(
  element: DesignElement,
  scale: number,
  updateElement: (id: string, patch: Partial<DesignElement>) => void,
) {
  const snapshot = useRef<DesignElement | null>(null);

  const handleResizeStart = useCallback(() => {
    snapshot.current = { ...element };
  }, [element]);

  const handleResize = useCallback((dx: number, dy: number, dir: string) => {
    const snap = snapshot.current;
    if (!snap) return;
    const dotDx = Math.round(dx / scale);
    const dotDy = Math.round(dy / scale);
    const patch: Partial<DesignElement> = {};
    if (dir.includes('e')) patch.width = Math.max(20, snap.width + dotDx);
    if (dir.includes('s')) patch.height = Math.max(20, snap.height + dotDy);
    if (dir.includes('w')) {
      const newWidth = Math.max(20, snap.width - dotDx);
      patch.x = snap.x + (snap.width - newWidth);
      patch.width = newWidth;
    }
    if (dir.includes('n')) {
      const newHeight = Math.max(20, snap.height - dotDy);
      patch.y = snap.y + (snap.height - newHeight);
      patch.height = newHeight;
    }
    updateElement(snap.id, patch);
  }, [scale, updateElement]);

  return { handleResizeStart, handleResize };
}
