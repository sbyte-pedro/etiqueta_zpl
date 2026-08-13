import React, { useCallback } from 'react';
import { DndContext, DragEndEvent, useDraggable, useDroppable } from '@dnd-kit/core';
import { useShallow } from 'zustand/react/shallow';
import { useDesignerStore } from '../store/useDesignerStore';
import { DesignElement } from '../types';
import { ResizeHandle } from './ResizeHandle';
import { TextElement } from './elements/TextElement';
import { BarcodeElement } from './elements/BarcodeElement';
import { QRCodeElement } from './elements/QRCodeElement';
import { RectElement } from './elements/RectElement';
import { LineElement } from './elements/LineElement';
import { usePanning } from '../hooks/usePanning';
import { useElementResize } from '../hooks/useElementResize';

function ElementRenderer({ element, scale }: { element: DesignElement; scale: number }) {
  switch (element.type) {
    case 'text': return <TextElement element={element} scale={scale} />;
    case 'barcode128': return <BarcodeElement element={element} scale={scale} />;
    case 'qrcode': return <QRCodeElement element={element} scale={scale} />;
    case 'rect': return <RectElement element={element} scale={scale} />;
    case 'line': return <LineElement element={element} scale={scale} />;
    case 'comment': return null;
  }
}

function DraggableElement({ element, scale }: { element: DesignElement; scale: number }) {
  const { selectedId, selectedIds, selectElement, toggleSelectElement, updateElement, deleteElement } =
    useDesignerStore(useShallow(s => ({
      selectedId: s.selectedId,
      selectedIds: s.selectedIds,
      selectElement: s.selectElement,
      toggleSelectElement: s.toggleSelectElement,
      updateElement: s.updateElement,
      deleteElement: s.deleteElement,
    })));

  const isSelected = selectedId === element.id;
  const isInSelection = selectedIds.includes(element.id);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: element.id });
  const { handleResizeStart, handleResize } = useElementResize(element, scale, updateElement);

  const mergedPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button === 0) {
      e.stopPropagation();
      if (e.shiftKey) {
        toggleSelectElement(element.id);
      } else {
        selectElement(element.id);
      }
    }
    listeners?.onPointerDown?.(e);
  }, [element.id, selectElement, toggleSelectElement, listeners]);

  const style: React.CSSProperties = {
    position: 'absolute',
    left: element.x * scale,
    top: element.y * scale,
    cursor: 'move',
    outline: isSelected
      ? '2px solid #2563eb'
      : isInSelection
        ? '2px solid #93c5fd'
        : undefined,
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onPointerDown={mergedPointerDown}
      onKeyDown={e => { if (e.key === 'Delete' && isSelected) deleteElement(element.id); }}
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
  const { labelWidth, labelHeight, elements, clearSelection, zoom } =
    useDesignerStore(useShallow(s => ({
      labelWidth: s.labelWidth,
      labelHeight: s.labelHeight,
      elements: s.elements,
      clearSelection: s.clearSelection,
      zoom: s.zoom,
    })));

  const { setNodeRef } = useDroppable({ id: 'canvas' });
  const { wrapperRef, isPanning, handleMouseDown } = usePanning();

  const canvasWidth = labelWidth * zoom;
  const canvasHeight = labelHeight * zoom;

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, delta } = event;
    const { elements, updateElement, snapToGrid, gridSize } = useDesignerStore.getState();
    const el = elements.find(e => e.id === active.id);
    if (!el) return;
    const dotDx = Math.round(delta.x / zoom);
    const dotDy = Math.round(delta.y / zoom);
    let x = Math.max(0, el.x + dotDx);
    let y = Math.max(0, el.y + dotDy);
    if (snapToGrid) {
      x = Math.round(x / gridSize) * gridSize;
      y = Math.round(y / gridSize) * gridSize;
    }
    updateElement(el.id, { x, y });
  }, [zoom]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        ref={wrapperRef}
        className="h-full overflow-auto bg-gray-100 p-4"
        style={{ cursor: isPanning ? 'grabbing' : undefined }}
        onMouseDown={handleMouseDown}
        onContextMenu={e => e.preventDefault()}
      >
        <div
          ref={setNodeRef}
          onClick={() => clearSelection()}
          style={{
            position: 'relative',
            width: canvasWidth,
            height: canvasHeight,
            background: 'white',
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            overflow: 'hidden',
          }}
        >
          {/* Elements layer — no isolation so ^FR difference blend can see the white canvas bg */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {elements.filter(el => el.type !== 'comment').map(el => (
              <DraggableElement key={el.id} element={el} scale={zoom} />
            ))}
          </div>
          {/* Dot grid rendered after elements via multiply — visible on white, invisible on black */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #aaa 1px, transparent 1px)',
            backgroundSize: `${8 * zoom}px ${8 * zoom}px`,
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </DndContext>
  );
}
