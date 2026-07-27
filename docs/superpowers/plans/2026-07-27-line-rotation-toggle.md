# Line Rotation Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a one-click horizontal/vertical toggle button to the Properties Panel for line elements.

**Architecture:** The line element derives orientation from `width >= height`. The toggle button simply swaps `width` and `height` via the existing `updateElement` action — no new data model fields, no backend changes.

**Tech Stack:** React, TypeScript, Tailwind CSS, Zustand (`useDesignerStore`)

## Global Constraints

- No new fields on `DesignElement`
- No changes to ZPL generator, parser, or backend
- Tailwind CSS for styling — match existing button patterns in `PropertiesPanel.tsx`
- All positions/sizes stored in dots; Properties Panel converts mm ↔ dots with `MM_TO_DOTS` / `DOTS_TO_MM`

---

### Task 1: Add rotate button to PropertiesPanel

**Files:**
- Modify: `frontend/src/components/PropertiesPanel.tsx`

**Interfaces:**
- Consumes: `el.width`, `el.height` (dots), `el.type`, `updateElement(id, patch)`
- Produces: visible toggle button for `line` elements only

- [ ] **Step 1: Open `frontend/src/components/PropertiesPanel.tsx` and locate the line type section**

The file currently has this block near the bottom of the returned JSX (around line 51):

```tsx
{(el.type === 'barcode128' || el.type === 'qrcode') && field('Value', el.value ?? '', 'value')}
```

There is no `line`-specific block — add one directly after the height field block and before the delete button.

- [ ] **Step 2: Add the rotate button**

Insert the following block after `{field('Height (mm)', ...)}` and before the delete button:

```tsx
{el.type === 'line' && (
  <button
    onClick={() => updateElement(el.id, { width: el.height, height: el.width })}
    className="mb-2 w-full text-xs text-blue-600 border border-blue-200 rounded py-1 hover:bg-blue-50 transition-colors"
  >
    {el.width >= el.height ? '↔ Horizontal' : '↕ Vertical'}
  </button>
)}
```

The label shows the **current** orientation so the user knows what state they're in.

- [ ] **Step 3: Verify manually**

1. Start backend and frontend
2. Add a Line element to the canvas
3. Select it — the Properties Panel should show **"↔ Horizontal"**
4. Click the button — line should flip to vertical and button should now read **"↕ Vertical"**
5. Click again — flips back to horizontal
6. Confirm the ZPL code in the Code tab updates width/height accordingly
7. Kill the servers

- [ ] **Step 4: Commit**

```bash
git add frontend/src/components/PropertiesPanel.tsx
git commit -m "feat: add horizontal/vertical toggle button for line elements"
```
