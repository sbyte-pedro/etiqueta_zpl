# Canvas Rendering Fixes

**Date:** 2026-07-23
**Branch:** feat/canvas-rendering-fixes

## Problems

Three visual differences between the canvas Design view and the Labelary Preview:

1. **Text is clipped** — `TextElement` uses `overflow: hidden` + `whiteSpace: nowrap`, truncating long strings. Width estimates are too small.
2. **Filled `^GB` boxes render as empty borders** — `RectElement` always uses `background: transparent`. Solid-fill boxes (thickness ≥ min dimension) should be black-filled.
3. **`^FR^GB` (reversed filled rect) not visible** — reversed filled rects should render as white fill on black background (or black fill depending on context). Currently ignored.

## Fix 1 — Text clipping

**`frontend/src/components/elements/TextElement.tsx`**
- Remove `overflow: hidden` and `whiteSpace: nowrap`
- Text is absolutely positioned so it won't disrupt layout

**`backend/src/zpl/parser.ts`** — improve text width estimate:
```
width = Math.max(200, Math.round(fontSize * 0.65 * value.length))
```

## Fix 2 — Filled rects

**`backend/src/zpl/types.ts` + `frontend/src/types.ts`**
- Add `filled?: boolean` to `Element` / `DesignElement`

**`backend/src/zpl/parser.ts`**
- In `GB` case: set `filled: true` when `thickness >= Math.min(w, h)` (same condition as `gbType` solid rect)

**`backend/src/zpl/generator.ts`**
- `filled` rect: emit `^GB${w},${h},${Math.min(w, h)}^FS` (thickness = min dimension)
- Border rect: existing `^GB${w},${h},8^FS`

**`backend/src/routes/zpl.ts`**
- Add `filled: z.boolean().optional()` to `ElementSchema`

**`frontend/src/components/elements/RectElement.tsx`**
- `filled && !reversed` → `background: black, border: none`
- `filled && reversed` → `background: white, border: 4px solid black` (white cutout on black — approximated as white fill with black border)
- `!filled` → existing border-only style

## Fix 3 — Reversed filled rect

Covered by Fix 2's `RectElement` changes above. The `^FR` flag is already parsed and stored as `reversed: true`. The updated `RectElement` handles `filled + reversed` combination.

## Files touched

| File | Change |
|------|--------|
| `backend/src/zpl/types.ts` | Add `filled?: boolean` |
| `frontend/src/types.ts` | Add `filled?: boolean` |
| `backend/src/zpl/parser.ts` | Set `filled`, improve text width |
| `backend/src/zpl/generator.ts` | Emit correct GB thickness for filled |
| `backend/src/routes/zpl.ts` | Add `filled` to Zod schema |
| `frontend/src/components/elements/TextElement.tsx` | Remove overflow/nowrap |
| `frontend/src/components/elements/RectElement.tsx` | Handle filled + reversed |
