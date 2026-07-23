# Label Export Feature

**Date:** 2026-07-23
**Branch:** feat/label-export

## Feature

An Export button in the toolbar that lets the user choose a file format and download the rendered label via the Labelary API.

## Supported Formats

| Format | Accept Header | File Extension | Use Case |
|--------|--------------|----------------|----------|
| PNG | `image/png` | `.png` | Preview image, sharing |
| PDF | `application/pdf` | `.pdf` | Print-ready document |
| EPL | `application/epl` | `.epl` | Legacy Eltron printers |
| ZPL | `application/zpl` | `.zpl` | Transformed ZPL output |

## UI Flow

1. **Export button** in Toolbar next to Preview, same styling
2. Clicking opens `ExportModal` — small centered overlay with:
   - Radio button group for the 4 formats (PNG selected by default)
   - "Download" button — triggers export
   - "Cancel" button — closes modal
   - Loading state while request is in flight
   - Error message if Labelary is unreachable
3. On Download: calls `exportZpl()`, receives blob, triggers browser download via `<a download>` trick
4. Modal closes after successful download

## Backend

**New route:** `POST /api/export` in `backend/src/routes/zpl.ts`

Request body: `{ zpl: string, labelWidth: number, labelHeight: number, format: 'png' | 'pdf' | 'epl' | 'zpl' }`

Logic:
- Map format to Accept header
- POST to Labelary (same URL pattern as `/api/preview`)
- Set `Content-Disposition: attachment; filename=label.<ext>`
- Set correct `Content-Type` matching the format
- Stream response back to client

Zod schema addition: `format: z.enum(['png', 'pdf', 'epl', 'zpl'])`

## Frontend

### `frontend/src/utils/zplClient.ts`
Add `exportZpl(zpl, labelWidth, labelHeight, format)` → returns `Blob`

### `frontend/src/components/ExportModal.tsx` (new)
- Local state: `format` (default `'png'`), `loading`, `error`
- On Download: call `exportZpl()`, create object URL, click hidden `<a>`, revoke URL
- Filename: `label.png` / `label.pdf` / `label.epl` / `label.zpl`

### `frontend/src/components/Toolbar.tsx`
- Add `showExportModal` boolean state (local, not in store — it's ephemeral UI)
- Render Export button; when clicked set `showExportModal = true`
- Render `{showExportModal && <ExportModal onClose={() => setShowExportModal(false)} />}`

## Files Touched

| File | Change |
|------|--------|
| `backend/src/routes/zpl.ts` | Add `/export` route |
| `frontend/src/utils/zplClient.ts` | Add `exportZpl()` |
| `frontend/src/components/ExportModal.tsx` | New component |
| `frontend/src/components/Toolbar.tsx` | Add Export button + modal render |

## Out of Scope
- IPL, DPL, SBPL, PCL5, PCL6, JSON formats
- Custom filename input
- Export from Code tab (always exports current `zplCode` from store)
