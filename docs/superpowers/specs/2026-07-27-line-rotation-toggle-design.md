# Line Rotation Toggle — Design Spec

**Date:** 2026-07-27

## Problem

Rotating a line element (horizontal ↔ vertical) currently requires manually editing the Width and Height number fields in the Properties Panel — not intuitive.

## Solution

Add a single toggle button to the Properties Panel that appears only when a `line` element is selected. Clicking it swaps `width` and `height`, which flips the line direction (the canvas already derives orientation from `width >= height`).

## Behaviour

- Button shows current orientation: **"↔ Horizontal"** or **"↕ Vertical"**
- On click: calls `updateElement(id, { width: el.height, height: el.width })`
- Canvas re-renders immediately via existing reactive path
- ZPL regenerates automatically via existing `syncToCode` debounce

## Constraints

- No new fields on `DesignElement`
- No changes to ZPL generator or parser
- No changes to backend

## Files changed

| File | Change |
|------|--------|
| `frontend/src/components/PropertiesPanel.tsx` | Add rotate button for `line` type |
