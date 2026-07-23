# Comment Element Type for ZPL Round-Trip Fidelity

**Date:** 2026-07-23
**Branch:** feat/improve-zpl-parser

## Problem

`^FX` comment lines in ZPL are discarded by the parser. When the user edits the design on the canvas, `syncToCode()` regenerates ZPL from `elements[]` only — since comments were never stored, they vanish permanently.

## Solution

Add `'comment'` as a first-class `ElementType`. Comment elements are invisible on the canvas and non-interactive, but they travel through the element array and are re-emitted by the generator, preserving their position relative to surrounding elements.

## Changes

### `backend/src/zpl/types.ts` and `frontend/src/types.ts`
- Add `'comment'` to the `ElementType` union.
- No new fields needed — `value` holds the comment text; `x/y/width/height` are 0.

### `backend/src/zpl/parser.ts`
- Change the `FX` case from silently consuming to emitting:
  ```
  { id, type: 'comment', x: 0, y: 0, width: 0, height: 0, value: tail }
  ```

### `backend/src/zpl/generator.ts`
- Add a `comment` case to `renderElement`:
  ```
  return `^FX ${el.value ?? ''}`;
  ```

### `frontend/src/store/useDesignerStore.ts`
- Add `comment: { width: 0, height: 0 }` to `DEFAULT_SIZES` to satisfy the `Record<ElementType, ...>` type. Comments are never added via sidebar.

### `frontend/src/components/Canvas.tsx`
- In the `elements.map(...)` render loop, skip `comment` elements entirely — they get no `DraggableElement` wrapper and no dnd listeners.

### `frontend/src/components/elements/` (no new file needed)
- `ElementRenderer` gets `case 'comment': return null`.

## What does NOT change
- Sidebar: no comment entry
- PropertiesPanel: no comment editing
- Canvas: visually invisible, not selectable, not draggable

## Tests to add
- Parser emits a comment element for `^FX` lines
- Generator emits `^FX` for comment elements
- Round-trip: ZPL with `^FX` → parse → generate → still contains `^FX`
