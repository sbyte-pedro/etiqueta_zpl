# Multi-Select Alignment Feature — Design Spec

**Date:** 2026-07-27

## Problem

There is no way to align multiple elements to each other. Users must manually edit X/Y coordinates in the Properties Panel, which is tedious and imprecise for document design work.

## Solution

Add multi-element selection (Shift+click) and 6 alignment buttons in the toolbar that appear when 2 or more elements are selected.

---

## Section 1: Store Changes

Add `selectedIds: string[]` to `useDesignerStore`. Keep existing `selectedId: string | null` for backward compatibility (PropertiesPanel uses it).

### New / changed actions

| Action | Behaviour |
|--------|-----------|
| `selectElement(id)` | Unchanged — clears multi-select, sets single selection. Sets both `selectedId = id` and `selectedIds = [id]` |
| `toggleSelectElement(id)` | Adds id to `selectedIds` if not present; removes it if present. Sets `selectedId = id` on add. If removing the last id, clears both |
| `clearSelection()` | Sets `selectedId = null`, `selectedIds = []` |
| `alignElements(alignment)` | Runs alignment math on all elements in `selectedIds`, calls `updateElement` for each. `alignment` is `'left' \| 'center-h' \| 'right' \| 'top' \| 'center-v' \| 'bottom'` |

### Alignment math (dot space)

Given the bounding box of `selectedIds`:
```
minX = min(el.x)
maxX = max(el.x + el.width)
minY = min(el.y)
maxY = max(el.y + el.height)
centerX = (minX + maxX) / 2
centerY = (minY + maxY) / 2
```

| Alignment | New position per element |
|-----------|--------------------------|
| left | `x = minX` |
| center-h | `x = round(centerX - el.width / 2)` |
| right | `x = maxX - el.width` |
| top | `y = minY` |
| center-v | `y = round(centerY - el.height / 2)` |
| bottom | `y = maxY - el.height` |

---

## Section 2: Canvas Multi-Selection Interaction

### Shift+click
- In `DraggableElement`, if `e.shiftKey` is true on pointer down → call `toggleSelectElement(id)`
- If no shift key → existing `selectElement(id)` behaviour

### Selection highlight
- `selectedId` (last clicked): `outline: '2px solid #2563eb'` (solid blue — existing)
- Other elements in `selectedIds`: `outline: '2px solid #93c5fd'` (light blue)
- Elements not selected: no outline

### Click canvas background
- Calls `clearSelection()` (replaces existing `selectElement(null)`)

---

## Section 3: Toolbar Alignment Buttons

When `selectedIds.length >= 2`, render 6 icon buttons in the `flex-1` spacer between the title and the dimension inputs.

```
[⊢ align-left]  [⊣⊢ center-h]  [⊣ align-right]  |  [⊤ align-top]  [⊤⊥ center-v]  [⊥ align-bottom]
```

Rendered as two groups (horizontal | vertical) separated by a thin divider. Each button is `text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded p-1`.

When `selectedIds.length < 2`, the spacer is empty.

---

## Files Changed

| File | Change |
|------|--------|
| `frontend/src/store/useDesignerStore.ts` | Add `selectedIds`, `toggleSelectElement`, `clearSelection`, `alignElements` |
| `frontend/src/components/Canvas.tsx` | Shift+click → `toggleSelectElement`; canvas click → `clearSelection`; multi-select outline |
| `frontend/src/components/Toolbar.tsx` | Alignment buttons in `flex-1` spacer, conditional on `selectedIds.length >= 2` |
| `frontend/src/components/PropertiesPanel.tsx` | No change — already uses `selectedId` |
