# Multi-Select Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Shift+click multi-selection and 6 alignment buttons (left, center-H, right, top, center-V, bottom) to the toolbar that operate on the selected element set.

**Architecture:** Three sequential tasks — store first (data model), canvas second (interaction), toolbar last (UI). Each task is independently testable. All alignment math runs in dot space using the bounding box of `selectedIds`.

**Tech Stack:** React, TypeScript, Zustand, Tailwind CSS

## Global Constraints

- `selectedId: string | null` must remain in the store unchanged — PropertiesPanel and other consumers depend on it
- All positions stored and manipulated in printer dots (no mm conversion in alignment math)
- No new fields on `DesignElement`
- No backend changes
- Tailwind CSS only — no inline style for new buttons (match existing toolbar button patterns)
- Alignment buttons only visible when `selectedIds.length >= 2`

---

### Task 1: Store — add `selectedIds`, `toggleSelectElement`, `clearSelection`, `alignElements`

**Files:**
- Modify: `frontend/src/store/useDesignerStore.ts`

**Interfaces:**
- Produces (used by Tasks 2 and 3):
  - `selectedIds: string[]` — state field
  - `toggleSelectElement(id: string): void`
  - `clearSelection(): void`
  - `alignElements(alignment: 'left' | 'center-h' | 'right' | 'top' | 'center-v' | 'bottom'): void`

- [ ] **Step 1: Add `selectedIds` to the interface and initial state**

In `useDesignerStore.ts`, add to the `DesignerStore` interface (after `selectedId`):
```ts
selectedIds: string[];
toggleSelectElement(id: string): void;
clearSelection(): void;
alignElements(alignment: 'left' | 'center-h' | 'right' | 'top' | 'center-v' | 'bottom'): void;
```

Add to the initial state object (after `selectedId: null`):
```ts
selectedIds: [],
```

- [ ] **Step 2: Update `selectElement` to also reset `selectedIds`**

Change the existing `selectElement` implementation from:
```ts
selectElement(id) {
  set({ selectedId: id });
},
```
to:
```ts
selectElement(id) {
  set({ selectedId: id, selectedIds: id ? [id] : [] });
},
```

- [ ] **Step 3: Update `deleteElement` to also clean up `selectedIds`**

Change from:
```ts
deleteElement(id) {
  set(s => ({
    elements: s.elements.filter(e => e.id !== id),
    selectedId: s.selectedId === id ? null : s.selectedId,
  }));
  get().syncToCode();
},
```
to:
```ts
deleteElement(id) {
  set(s => ({
    elements: s.elements.filter(e => e.id !== id),
    selectedId: s.selectedId === id ? null : s.selectedId,
    selectedIds: s.selectedIds.filter(sid => sid !== id),
  }));
  get().syncToCode();
},
```

- [ ] **Step 4: Update `onCodeChange` parse result to also reset `selectedIds`**

In the `set({ elements: result.elements, ... })` call inside `onCodeChange`, add `selectedIds: []`:
```ts
set({
  elements: result.elements,
  labelWidth: result.labelWidth || get().labelWidth,
  labelHeight: result.labelHeight || get().labelHeight,
  selectedId: null,
  selectedIds: [],
  zplError: '',
});
```

- [ ] **Step 5: Implement `toggleSelectElement`**

Add after `selectElement`:
```ts
toggleSelectElement(id) {
  set(s => {
    const already = s.selectedIds.includes(id);
    const selectedIds = already
      ? s.selectedIds.filter(sid => sid !== id)
      : [...s.selectedIds, id];
    const selectedId = already
      ? (selectedIds.length > 0 ? selectedIds[selectedIds.length - 1] : null)
      : id;
    return { selectedIds, selectedId };
  });
},
```

- [ ] **Step 6: Implement `clearSelection`**

Add after `toggleSelectElement`:
```ts
clearSelection() {
  set({ selectedId: null, selectedIds: [] });
},
```

- [ ] **Step 7: Implement `alignElements`**

Add after `clearSelection`:
```ts
alignElements(alignment) {
  const { elements, selectedIds } = get();
  const selected = elements.filter(e => selectedIds.includes(e.id));
  if (selected.length < 2) return;

  const minX = Math.min(...selected.map(e => e.x));
  const maxX = Math.max(...selected.map(e => e.x + e.width));
  const minY = Math.min(...selected.map(e => e.y));
  const maxY = Math.max(...selected.map(e => e.y + e.height));
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  selected.forEach(el => {
    let patch: Partial<DesignElement> = {};
    switch (alignment) {
      case 'left':     patch = { x: minX }; break;
      case 'center-h': patch = { x: Math.round(centerX - el.width / 2) }; break;
      case 'right':    patch = { x: maxX - el.width }; break;
      case 'top':      patch = { y: minY }; break;
      case 'center-v': patch = { y: Math.round(centerY - el.height / 2) }; break;
      case 'bottom':   patch = { y: maxY - el.height }; break;
    }
    get().updateElement(el.id, patch);
  });
},
```

- [ ] **Step 8: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors related to `useDesignerStore.ts`.

- [ ] **Step 9: Commit**

```bash
git add frontend/src/store/useDesignerStore.ts
git commit -m "feat: add selectedIds, toggleSelectElement, clearSelection, alignElements to store"
```

---

### Task 2: Canvas — Shift+click multi-selection and multi-selection outline

**Files:**
- Modify: `frontend/src/components/Canvas.tsx`

**Interfaces:**
- Consumes from Task 1: `selectedIds: string[]`, `toggleSelectElement(id)`, `clearSelection()`
- Existing `selectedId`, `selectElement` behaviour unchanged

- [ ] **Step 1: Read `selectedIds` and `toggleSelectElement` from the store in `DraggableElement`**

In `DraggableElement`, change the store destructure from:
```ts
const { selectedId, selectElement, updateElement, deleteElement } = useDesignerStore();
const isSelected = selectedId === element.id;
```
to:
```ts
const { selectedId, selectedIds, selectElement, toggleSelectElement, updateElement, deleteElement } = useDesignerStore();
const isSelected = selectedId === element.id;
const isInSelection = selectedIds.includes(element.id);
```

- [ ] **Step 2: Update `mergedPointerDown` to handle Shift+click**

Change from:
```ts
const mergedPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
  if (e.button === 0) { e.stopPropagation(); selectElement(element.id); }
  listeners?.onPointerDown?.(e);
};
```
to:
```ts
const mergedPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
  if (e.button === 0) {
    e.stopPropagation();
    if (e.shiftKey) {
      toggleSelectElement(element.id);
    } else {
      selectElement(element.id);
    }
  }
  listeners?.onPointerDown?.(e);
};
```

- [ ] **Step 3: Update the outline style to show multi-selection highlight**

Change the `style` object from:
```ts
outline: isSelected ? '2px solid #2563eb' : undefined,
```
to:
```ts
outline: isSelected
  ? '2px solid #2563eb'
  : isInSelection
    ? '2px solid #93c5fd'
    : undefined,
```

- [ ] **Step 4: Update canvas background click to use `clearSelection`**

In the `Canvas` component, update the store destructure:
```ts
const { labelWidth, labelHeight, elements, selectElement, zoom } = useDesignerStore();
```
to:
```ts
const { labelWidth, labelHeight, elements, clearSelection, zoom } = useDesignerStore();
```

Change the canvas `onClick`:
```ts
onClick={() => selectElement(null)}
```
to:
```ts
onClick={() => clearSelection()}
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add frontend/src/components/Canvas.tsx
git commit -m "feat: shift+click multi-selection and multi-selection outline on canvas"
```

---

### Task 3: Toolbar — alignment buttons in `flex-1` spacer

**Files:**
- Modify: `frontend/src/components/Toolbar.tsx`

**Interfaces:**
- Consumes from Task 1: `selectedIds: string[]`, `alignElements(alignment)`
- No changes to existing toolbar props or actions

- [ ] **Step 1: Read `selectedIds` and `alignElements` from the store**

In `Toolbar`, add to the `useDesignerStore` destructure:
```ts
const { labelWidth, labelHeight, setLabelSize, fetchPreview, previewLoading, selectedIds, alignElements } = useDesignerStore();
```

- [ ] **Step 2: Replace the empty `<div className="flex-1" />` with alignment buttons**

Replace:
```tsx
<div className="flex-1" />
```
with:
```tsx
<div className="flex-1 flex items-center justify-center gap-1">
  {selectedIds.length >= 2 && (
    <>
      <div className="flex items-center gap-0.5 border border-gray-200 rounded px-1">
        <button onClick={() => alignElements('left')}     className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align left edges">⊢</button>
        <button onClick={() => alignElements('center-h')} className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Center horizontally">⣿</button>
        <button onClick={() => alignElements('right')}    className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align right edges">⊣</button>
      </div>
      <div className="flex items-center gap-0.5 border border-gray-200 rounded px-1">
        <button onClick={() => alignElements('top')}      className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align top edges">⊤</button>
        <button onClick={() => alignElements('center-v')} className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Center vertically">⊞</button>
        <button onClick={() => alignElements('bottom')}   className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align bottom edges">⊥</button>
      </div>
    </>
  )}
</div>
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Manual verification**

1. Start backend and frontend
2. Add 3 text elements at different positions
3. Shift+click two of them — both should show blue outline, alignment buttons appear in toolbar
4. Click "Align left" (⊢) — both elements' left edges should snap to the leftmost element's x
5. Click canvas background — selection clears, buttons disappear
6. Shift+click only 1 element — no alignment buttons (need ≥2)
7. Kill the servers

- [ ] **Step 5: Commit**

```bash
git add frontend/src/components/Toolbar.tsx
git commit -m "feat: alignment buttons in toolbar for multi-selected elements"
```
