# Labelary Preview Feature

**Date:** 2026-07-23

## Feature

A manual "Preview" button that calls the Labelary API and renders the resulting PNG inline below the canvas.

## Behaviour

- **Preview button** in the Toolbar (next to Save/Load) — triggers the first render
- **Redraw button** next to the image — re-calls the same function on demand
- **No auto-update** — every call is user-initiated (Labelary charges per request)
- Loading spinner while the request is in flight
- Error message if the backend or Labelary is unreachable
- Previous blob URL is revoked before a new one is set (memory leak prevention)
- Panel is only visible in the Design tab and only when `previewUrl` is non-null

## State changes (`useDesignerStore`)

Add three fields:
- `previewLoading: boolean` (default `false`)
- `previewError: string` (default `''`)
- `fetchPreview(): Promise<void>` — reads `zplCode`, `labelWidth`, `labelHeight` from store, calls `previewZpl(...)`, revokes old blob URL, sets `previewUrl` / `previewLoading` / `previewError`

`previewUrl` and `setPreviewUrl` already exist — no change needed there.

## Components

### `Toolbar.tsx`
Add a "Preview" button next to the Save/Load group. Calls `fetchPreview()` from the store. Shows a subtle loading indicator (`previewLoading`) on the button itself (disabled + "..." label).

### `PreviewPanel.tsx` (new)
Renders below the canvas in Design tab. Only mounts when `previewUrl !== null`. Contains:
- `<img src={previewUrl} />` — max-width 100%, height auto
- "Redraw" button — calls `fetchPreview()`
- Error message from `previewError` if non-empty

### `App.tsx`
In the Design tab branch, wrap `Canvas` and `PreviewPanel` in a `flex flex-col overflow-auto h-full` div so the panel scrolls naturally below the canvas.

## Files touched

| File | Change |
|------|--------|
| `frontend/src/store/useDesignerStore.ts` | Add `previewLoading`, `previewError`, `fetchPreview()` |
| `frontend/src/components/Toolbar.tsx` | Add Preview button |
| `frontend/src/components/PreviewPanel.tsx` | New component |
| `frontend/src/App.tsx` | Render PreviewPanel below Canvas in Design tab |

## Out of scope
- Auto-update on ZPL change
- Preview in Code tab
- Download button for the PNG
