# Line/Rect Thickness Control Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Store `thickness` on line and rect elements, expose it in the Properties Panel, use it in the ZPL generator, preserve it through the parser, and render it accurately on the canvas so design and preview match.

**Architecture:** Four sequential tasks — types first (shared contract), then backend (generator + parser), then frontend canvas (LineElement, RectElement), then UI (PropertiesPanel). Each task is independently testable. All thickness values stored in printer dots; PropertiesPanel converts mm ↔ dots for display like all other geometry fields.

**Tech Stack:** TypeScript (frontend + backend), React, Zustand, Jest (backend tests)

## Global Constraints

- `thickness` is optional (`thickness?: number`) — existing elements without it use fallback defaults: `8` for rect border, `Math.min(width, height)` for line
- All thickness values stored and manipulated in **printer dots** — no mm in the type or generator
- PropertiesPanel converts dots → mm for display and mm → dots on save (same as x/y/width/height)
- `MM_TO_DOTS = (mm) => Math.round(mm * 8.03)`, `DOTS_TO_MM = (dots) => parseFloat((dots / 8.03).toFixed(1))`
- No new dependencies
- Backend: `backend/src/zpl/types.ts` and `frontend/src/types.ts` must stay in sync (same optional `thickness?: number` field)
- Minimum thickness: 1 dot

---

### Task 1: Add `thickness` to both type definitions

**Files:**
- Modify: `frontend/src/types.ts`
- Modify: `backend/src/zpl/types.ts`

**Interfaces:**
- Produces (used by all later tasks):
  - `DesignElement.thickness?: number` (frontend)
  - `Element.thickness?: number` (backend)

- [ ] **Step 1: Add `thickness` to `frontend/src/types.ts`**

Change:
```ts
export interface DesignElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
  fontSize?: number;
  fontName?: string;
  reversed?: boolean;
  filled?: boolean;
}
```
To:
```ts
export interface DesignElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
  fontSize?: number;
  fontName?: string;
  reversed?: boolean;
  filled?: boolean;
  thickness?: number;
}
```

- [ ] **Step 2: Add `thickness` to `backend/src/zpl/types.ts`**

Change:
```ts
export interface Element {
  id: string;
  type: ElementType;
  x: number;       // ZPL dots
  y: number;       // ZPL dots
  width: number;   // ZPL dots
  height: number;  // ZPL dots
  value?: string;
  fontSize?: number;
  fontName?: string;
  reversed?: boolean;
  filled?: boolean;
}
```
To:
```ts
export interface Element {
  id: string;
  type: ElementType;
  x: number;       // ZPL dots
  y: number;       // ZPL dots
  width: number;   // ZPL dots
  height: number;  // ZPL dots
  value?: string;
  fontSize?: number;
  fontName?: string;
  reversed?: boolean;
  filled?: boolean;
  thickness?: number;  // ZPL dots; applies to line and non-filled rect border
}
```

- [ ] **Step 3: Verify TypeScript compiles in both packages**

```bash
cd backend && npx tsc --noEmit && cd ../frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/types.ts backend/src/zpl/types.ts
git commit -m "feat: add optional thickness field to DesignElement and Element types"
```

---

### Task 2: Backend — generator reads `thickness`, parser preserves it

**Files:**
- Modify: `backend/src/zpl/generator.ts`
- Modify: `backend/src/zpl/parser.ts`
- Modify: `backend/src/zpl/generator.test.ts` (add tests)
- Modify: `backend/src/zpl/parser.test.ts` (add tests)

**Interfaces:**
- Consumes from Task 1: `Element.thickness?: number`
- Produces: round-trip `thickness` value survives `generate → parse`

- [ ] **Step 1: Write failing generator test for rect thickness**

In `backend/src/zpl/generator.test.ts`, add inside the existing `describe` block:

```ts
it('uses element thickness for rect border when provided', () => {
  const result = generateZpl({
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: '1', type: 'rect', x: 10, y: 10, width: 200, height: 100, thickness: 4 }],
  });
  expect(result).toContain('^GB200,100,4');
});

it('defaults rect border thickness to 8 when not provided', () => {
  const result = generateZpl({
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: '1', type: 'rect', x: 10, y: 10, width: 200, height: 100 }],
  });
  expect(result).toContain('^GB200,100,8');
});

it('uses element thickness for line when provided', () => {
  const result = generateZpl({
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: '1', type: 'line', x: 10, y: 10, width: 200, height: 4, thickness: 4 }],
  });
  expect(result).toContain('^GB200,4,4');
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd backend && npx jest --testPathPattern="generator" --no-coverage
```
Expected: the 3 new tests FAIL.

- [ ] **Step 3: Update generator to read `thickness` from element**

In `backend/src/zpl/generator.ts`, change the `rect` case from:
```ts
case 'rect': {
  const thickness = el.filled ? Math.min(el.width, el.height) : 8;
```
To:
```ts
case 'rect': {
  const thickness = el.filled ? Math.min(el.width, el.height) : (el.thickness ?? 8);
```

Change the `line` case from:
```ts
case 'line': {
  const t = Math.min(el.width, el.height);
  return `${fo}^GB${el.width},${el.height},${t}^FS`;
}
```
To:
```ts
case 'line': {
  const t = el.thickness ?? Math.min(el.width, el.height);
  return `${fo}^GB${el.width},${el.height},${t}^FS`;
}
```

- [ ] **Step 4: Run generator tests — must pass**

```bash
cd backend && npx jest --testPathPattern="generator" --no-coverage
```
Expected: all tests PASS.

- [ ] **Step 5: Write failing parser test for thickness round-trip**

In `backend/src/zpl/parser.test.ts`, add:

```ts
it('preserves rect border thickness through parse', () => {
  const result = parseZpl('^XA^PW800^LL1200^FO10,10^GB200,100,4^FS^XZ');
  expect(result.elements).toHaveLength(1);
  expect(result.elements[0].type).toBe('rect');
  expect(result.elements[0].thickness).toBe(4);
});

it('preserves line thickness through parse', () => {
  const result = parseZpl('^XA^PW800^LL1200^FO10,10^GB200,4,4^FS^XZ');
  expect(result.elements).toHaveLength(1);
  expect(result.elements[0].type).toBe('line');
  expect(result.elements[0].thickness).toBe(4);
});

it('does not set thickness on filled rect', () => {
  const result = parseZpl('^XA^PW800^LL1200^FO10,10^GB100,100,100^FS^XZ');
  expect(result.elements[0].type).toBe('rect');
  expect(result.elements[0].filled).toBe(true);
  expect(result.elements[0].thickness).toBeUndefined();
});
```

- [ ] **Step 6: Run parser tests — new tests must fail**

```bash
cd backend && npx jest --testPathPattern="parser" --no-coverage
```
Expected: the 3 new tests FAIL.

- [ ] **Step 7: Update parser to preserve `thickness`**

In `backend/src/zpl/parser.ts`, find the `GB` case where `elements.push(...)` occurs (around line 204). Change:
```ts
const isFilled = t >= Math.min(w, h);
elements.push({
  id: nextId(),
  type,
  x: fieldX,
  y: fieldY,
  width: w,
  height: h,
  ...(isFilled ? { filled: true } : {}),
  ...(fieldReversed ? { reversed: true } : {}),
});
```
To:
```ts
const isFilled = t >= Math.min(w, h);
elements.push({
  id: nextId(),
  type,
  x: fieldX,
  y: fieldY,
  width: w,
  height: h,
  ...(isFilled ? { filled: true } : { thickness: t }),
  ...(fieldReversed ? { reversed: true } : {}),
});
```

- [ ] **Step 8: Run all backend tests — all must pass**

```bash
cd backend && npx jest --no-coverage
```
Expected: all tests PASS (including the 6 new ones).

- [ ] **Step 9: Commit**

```bash
git add backend/src/zpl/generator.ts backend/src/zpl/parser.ts backend/src/zpl/generator.test.ts backend/src/zpl/parser.test.ts
git commit -m "feat: generator reads thickness from element, parser preserves thickness on parse"
```

---

### Task 3: Frontend canvas — LineElement and RectElement use scaled thickness

**Files:**
- Modify: `frontend/src/components/elements/LineElement.tsx`
- Modify: `frontend/src/components/elements/RectElement.tsx`

**Interfaces:**
- Consumes from Task 1: `DesignElement.thickness?: number`
- No new exports

- [ ] **Step 1: Update `LineElement.tsx` to use scaled thickness**

Replace the entire file content:
```tsx
import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function LineElement({ element, scale }: Props) {
  const w = element.width * scale;
  const h = element.height * scale;
  const isHorizontal = w >= h;
  const thickness = (element.thickness ?? Math.min(element.width, element.height)) * scale;
  return (
    <div style={{
      width: w,
      height: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: isHorizontal ? '100%' : thickness,
        height: isHorizontal ? thickness : '100%',
        background: 'black',
      }} />
    </div>
  );
}
```

- [ ] **Step 2: Update `RectElement.tsx` to use scaled thickness**

Replace the `border` line in the non-filled, non-reversed return:
```tsx
border: filled ? 'none' : '2px solid black',
```
With:
```tsx
border: filled ? 'none' : `${(element.thickness ?? 8) * scale}px solid black`,
```

The full updated non-filled/non-reversed return block:
```tsx
return (
  <div style={{
    width: element.width * scale,
    height: element.height * scale,
    background: filled ? 'black' : 'transparent',
    border: filled ? 'none' : `${(element.thickness ?? 8) * scale}px solid black`,
    boxSizing: 'border-box',
  }} />
);
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/components/elements/LineElement.tsx frontend/src/components/elements/RectElement.tsx
git commit -m "feat: canvas LineElement and RectElement render thickness from element data"
```

---

### Task 4: PropertiesPanel — expose thickness field for line and rect

**Files:**
- Modify: `frontend/src/components/PropertiesPanel.tsx`

**Interfaces:**
- Consumes from Task 1: `DesignElement.thickness?: number`
- Consumes: `MM_TO_DOTS`, `DOTS_TO_MM` already defined at top of PropertiesPanel.tsx
- `updateElement(id, { thickness: MM_TO_DOTS(value) })` — same pattern as x/y/width/height

- [ ] **Step 1: Add thickness to the mm-converted fields list**

In `PropertiesPanel.tsx`, the `onChange` handler (around line 26-32) currently checks:
```ts
if (['x', 'y', 'width', 'height'].includes(key)) {
  updateElement(el.id, { [key]: MM_TO_DOTS(Number(v)) });
} else {
  updateElement(el.id, { [key]: v });
}
```

Change to include `'thickness'`:
```ts
if (['x', 'y', 'width', 'height', 'thickness'].includes(key)) {
  updateElement(el.id, { [key]: MM_TO_DOTS(Number(v)) });
} else {
  updateElement(el.id, { [key]: v });
}
```

- [ ] **Step 2: Add the thickness field for line and non-filled rect**

After the height field row and before the text/barcode-specific rows, add:
```tsx
{(el.type === 'line' || (el.type === 'rect' && !el.filled)) && (
  field('Thickness (mm)', DOTS_TO_MM(el.thickness ?? (el.type === 'line' ? Math.min(el.width, el.height) : 8)), 'thickness', 'number')
)}
```

Place this block right after:
```tsx
{field('Height (mm)', DOTS_TO_MM(el.height), 'height', 'number')}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/components/PropertiesPanel.tsx
git commit -m "feat: thickness field in PropertiesPanel for line and rect elements"
```
