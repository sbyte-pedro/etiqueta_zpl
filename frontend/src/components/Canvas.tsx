import React, { useCallback, useState } from 'react';
import { DndContext, DragEndEvent, DragMoveEvent, DragStartEvent, useDraggable, useDroppable } from '@dnd-kit/core';
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

function DraggableElement({ element, scale, groupOffset }: { element: DesignElement; scale: number; groupOffset: { x: number; y: number } | null }) {
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
      } else if (!selectedIds.includes(element.id)) {
        // Preserve an existing multi-selection when starting a drag on one of its members.
        selectElement(element.id);
      }
    }
    listeners?.onPointerDown?.(e);
  }, [element.id, selectElement, toggleSelectElement, listeners, selectedIds]);

  // dnd-kit only applies `transform` to the actively dragged node. For the other
  // members of a multi-selection we mirror the drag via `groupOffset` (px).
  const activeTransform = transform
    ? { x: transform.x, y: transform.y }
    : groupOffset && isInSelection
      ? groupOffset
      : null;

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
    transform: activeTransform ? `translate(${activeTransform.x}px, ${activeTransform.y}px)` : undefined,
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

  // Live pixel offset while a multi-selection drag is in progress, so the
  // non-active members follow the pointer too.
  const [groupOffset, setGroupOffset] = useState<{ x: number; y: number } | null>(null);

  const handleDragStart = useCallback((_event: DragStartEvent) => {
    setGroupOffset({ x: 0, y: 0 });
  }, []);

  const handleDragMove = useCallback((event: DragMoveEvent) => {
    setGroupOffset({ x: event.delta.x, y: event.delta.y });
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, delta } = event;
    setGroupOffset(null);
    const { elements, updateElement, selectedIds, snapToGrid, gridSize } = useDesignerStore.getState();
    const dragged = elements.find(e => e.id === active.id);
    if (!dragged) return;

    // Move every selected element by the same delta; fall back to the dragged one.
    const movingIds = selectedIds.includes(String(active.id)) && selectedIds.length > 0
      ? selectedIds
      : [String(active.id)];

    const dotDx = Math.round(delta.x / zoom);
    const dotDy = Math.round(delta.y / zoom);

    for (const id of movingIds) {
      const el = elements.find(e => e.id === id);
      if (!el) continue;
      let x = Math.max(0, el.x + dotDx);
      let y = Math.max(0, el.y + dotDy);
      if (snapToGrid) {
        x = Math.round(x / gridSize) * gridSize;
        y = Math.round(y / gridSize) * gridSize;
      }
      updateElement(id, { x, y });
    }
  }, [zoom]);

  return (
    <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
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
              <DraggableElement key={el.id} element={el} scale={zoom} groupOffset={groupOffset} />
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
