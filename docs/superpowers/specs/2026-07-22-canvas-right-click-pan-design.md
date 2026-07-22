# Canvas Right-Click Drag-to-Pan

**Date:** 2026-07-22

## Feature

Hold right mouse button and drag on the canvas background to pan/scroll the canvas area.

## Behaviour

- Right mouse button down on the canvas wrapper → start pan, cursor becomes `grabbing`
- Mouse move (on `document`) → scroll the wrapper by the delta from the starting position
- Mouse up (on `document`) → end pan, cursor resets
- `contextmenu` event suppressed on the wrapper to prevent the browser context menu from appearing on right-click release
- Left-click and dnd-kit element dragging are unaffected

## Implementation

All changes in `frontend/src/components/Canvas.tsx`.

1. Add a `wrapperRef` (`useRef<HTMLDivElement>`) on the canvas outer wrapper div.
2. Add a `panState` ref (`useRef`) storing `{ active: boolean, startX, startY, scrollLeft, scrollTop }`.
3. `handleMouseDown(e)` — fires on the wrapper, guards on `e.button === 2`. Records start position and current scroll offsets from `wrapperRef.current`. Attaches `handleMouseMove` and `handleMouseUp` to `document`.
4. `handleMouseMove(e)` — computes `dx = e.clientX - startX`, `dy = e.clientY - startY`. Sets `wrapperRef.current.scrollLeft = scrollLeft - dx` and `scrollTop = scrollTop - dy`.
5. `handleMouseUp()` — removes document listeners, resets `panState.active`.
6. `onContextMenu` on the wrapper calls `e.preventDefault()`.
7. Cursor style on the wrapper: `cursor: isPanning ? 'grabbing' : 'default'`. `isPanning` tracked via a `useState` boolean toggled in mousedown/mouseup.

## Scope

- **File:** `frontend/src/components/Canvas.tsx` only
- **New dependencies:** none
- **Side effects:** none — dnd-kit only listens to left-click drags; right-click is ignored by it
