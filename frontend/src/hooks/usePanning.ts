import { useCallback, useRef, useState } from 'react';

export function usePanning() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panState = useRef({ active: false, startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 2) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    panState.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      scrollLeft: wrapper.scrollLeft,
      scrollTop: wrapper.scrollTop,
    };
    setIsPanning(true);

    const onMouseMove = (ev: MouseEvent) => {
      if (!panState.current.active) return;
      const dx = ev.clientX - panState.current.startX;
      const dy = ev.clientY - panState.current.startY;
      wrapper.scrollLeft = panState.current.scrollLeft - dx;
      wrapper.scrollTop = panState.current.scrollTop - dy;
    };

    const onMouseUp = () => {
      panState.current.active = false;
      setIsPanning(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, []);

  return { wrapperRef, isPanning, handleMouseDown };
}
