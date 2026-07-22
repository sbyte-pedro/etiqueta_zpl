import React, { useCallback, useRef } from 'react';
import { DndContext, DragEndEvent, useDraggable, useDroppable } from '@dnd-kit/core';
import { useDesignerStore } from '../store/useDesignerStore';
import { DesignElement } from '../types';
import { ResizeHandle } from './ResizeHandle';
import { TextElement } from './elements/TextElement';
import { BarcodeElement } from './elements/BarcodeElement';
import { QRCodeElement } from './elements/QRCodeElement';
import { RectElement } from './elements/RectElement';
import { LineElement } from './elements/LineElement';
import { ImagePlaceholder } from './elements/ImagePlaceholder';

const SCALE = 2; // base scale — actual scale comes from the store zoom

function ElementRenderer({ element, scale }: { element: DesignElement; scale: number }) {
  switch (element.type) {
    case 'text': return <TextElement element={element} scale={scale} />;
    case 'barcode128': return <BarcodeElement element={element} scale={scale} />;
    case 'qrcode': return <QRCodeElement element={element} scale={scale} />;
    case 'rect': return <RectElement element={element} scale={scale} />;
    case 'line': return <LineElement element={element} scale={scale} />;
    case 'image-placeholder': return <ImagePlaceholder element={element} scale={scale} />;
  }
}

function DraggableElement({ element, scale }: { element: DesignElement; scale: number }) {
  const { selectedId, selectElement, updateElement, deleteElement } = useDesignerStore();
  const isSelected = selectedId === element.id;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: element.id });

  // Snapshot of the element state at the moment a resize drag starts
  const resizeSnapshot = useRef<DesignElement | null>(null);

  const handleResizeStart = useCallback(() => {
    resizeSnapshot.current = { ...element };
  }, [element]);

  const handleResize = useCallback((dx: number, dy: number, dir: string) => {
    const snap = resizeSnapshot.current;
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

    updateElement(element.id, patch);
  }, [element.id, scale, updateElement]);

  const style: React.CSSProperties = {
    position: 'absolute',
    left: element.x * scale,
    top: element.y * scale,
    cursor: 'move',
    outline: isSelected ? '2px solid #2563eb' : undefined,
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={e => { e.stopPropagation(); selectElement(element.id); }}
      onKeyDown={e => { if (e.key === 'Delete' && isSelected) deleteElement(element.id); }}
      {...listeners}
      {...attributes}
    >
      <ElementRenderer element={element} scale={scale} />
      {isSelected && (
        <>
          {(['n','s','e','w','ne','nw','se','sw'] as const).map(d => (
            <ResizeHandle
              key={d}
              direction={d}
              onResizeStart={handleResizeStart}
              onResize={handleResize}
            />
          ))}
        </>
      )}
    </div>
  );
}

export function Canvas() {
  const { labelWidth, labelHeight, elements, selectElement, zoom } = useDesignerStore();
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  const canvasWidth = labelWidth * zoom;
  const canvasHeight = labelHeight * zoom;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const el = elements.find(e => e.id === active.id);
    if (!el) return;
    const dotDx = Math.round(delta.x / zoom);
    const dotDy = Math.round(delta.y / zoom);
    useDesignerStore.getState().updateElement(el.id, {
      x: Math.max(0, el.x + dotDx),
      y: Math.max(0, el.y + dotDy),
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex-1 overflow-auto bg-gray-100 p-4">
        <div
          ref={setNodeRef}
          onClick={() => selectElement(null)}
          style={{
            position: 'relative',
            width: canvasWidth,
            height: canvasHeight,
            background: 'white',
            backgroundImage: 'radial-gradient(circle, #ccc 1px, transparent 1px)',
            backgroundSize: `${8 * zoom}px ${8 * zoom}px`,
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {elements.map(el => (
            <DraggableElement key={el.id} element={el} scale={zoom} />
          ))}
        </div>
      </div>
    </DndContext>
  );
}
