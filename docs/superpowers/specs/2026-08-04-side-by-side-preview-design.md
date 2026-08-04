# Side-by-Side Preview Panel — Design Spec

**Date:** 2026-08-04

## Problem

The preview currently renders below the canvas in a vertical stack. Users must scroll down to compare design vs. preview, making it hard to spot differences.

## Solution

When preview is active, the center work area splits into a two-column horizontal layout: canvas on the left, preview on the right. PropertiesPanel hides while preview is open.

---

## Layout

```
[Sidebar] | [Canvas (flex-1)] | [Preview column (labelWidth*zoom px)] |  ← PropertiesPanel hidden
```

- The split is horizontal (`flex flex-row`) inside the existing `flex-1` center area
- Canvas column: `flex-1` (takes all remaining space)
- Preview column: fixed width = `labelWidth * zoom` px — matches canvas label width exactly
- Preview column has its own vertical scroll if label is taller than the viewport
- PropertiesPanel is hidden while `previewUrl || previewLoading || previewError` is truthy; returns when all three are falsy (preview closed)

## Preview column contents

- Header row: "LABEL PREVIEW" label (text-xs, font-semibold, gray-500, uppercase) + "Close Preview" button (right-aligned)
- Loading state: "Loading…" text (text-xs, gray-400)
- Error state: red error banner (same as current)
- Image: PNG at `width: labelWidth * zoom`, `imageRendering: pixelated`, `display: block`

## Transition behavior

- **Opening**: `previewUrl || previewLoading || previewError` becomes truthy → preview column appears, PropertiesPanel disappears — instant, no animation
- **Closing**: `closePreview()` → all three become falsy → preview column disappears, PropertiesPanel returns — instant

## Files changed

| File | Change |
|------|--------|
| `frontend/src/App.tsx` | Conditionally hide PropertiesPanel when preview active; move PreviewPanel from below canvas to right column |
| `frontend/src/components/PreviewPanel.tsx` | Remove bottom-panel border/padding wrapper; render as right-side column with its own scroll |
