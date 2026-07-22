# Zebra Label Designer

Visual drag-and-drop designer for Zebra printer labels with bidirectional ZPL code sync.

## Quick Start

Requires Node.js >= 18.

```bash
npm install

# Terminal 1 — backend (http://localhost:3001)
npm run dev:backend

# Terminal 2 — frontend (http://localhost:5173)
npm run dev:frontend
```

## Features

- Drag-and-drop Text, Barcode 128, QR Code, Rectangle, Image Placeholder elements
- Resize any element with 8-handle drag
- Live ZPL code sync: canvas changes update code automatically
- "Apply to Design": paste/edit raw ZPL, push back to canvas
- Custom label dimensions (mm)
- Labelary preview: see how the label looks on the printer

## Architecture

Monorepo (`npm workspaces`). Backend owns all ZPL logic; frontend is pure UI state + API calls.

- `backend/src/zpl/generator.ts` — elements → ZPL string
- `backend/src/zpl/parser.ts` — ZPL string → elements
- `frontend/src/store/useDesignerStore.ts` — Zustand store (all state)
- `frontend/src/utils/zplClient.ts` — fetch wrappers for API

## Running Tests

```bash
cd backend && npm test
```
