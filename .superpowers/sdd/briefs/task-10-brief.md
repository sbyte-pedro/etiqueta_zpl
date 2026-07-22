# Task 10: Final Wiring + README

## Context
Task 10 of 10 — Zebra Label Designer. The app is fully built and verified. You are adding the README and doing a final end-to-end verification.

## Global Constraints
- Project root: `c:/Pedro/projects/etiqueta_zpl`
- Backend on port 3001, frontend on 5173

## File to Create

### `README.md` (at project root)
```markdown
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
```
(Note: Use triple backtick code fences in the actual README file, but the brief shows them as indented above for formatting clarity.)

## Verification Checklist
Before committing, verify these manually (or confirm they were verified in Task 9):
- [ ] Add Text element → Code tab shows `^FDNew Text^FS`
- [ ] Add Barcode 128 → Code shows `^BCN`
- [ ] Add QR Code → Code shows `^BQN`
- [ ] Add Rectangle → Code shows `^GB`
- [ ] Add Image Placeholder → Code shows `^GB...,3,B,5`
- [ ] Resize any element → Code updates after 200ms debounce
- [ ] Edit ZPL in code editor → "Apply to Design" → canvas reflects changes
- [ ] Change label width/height → Code updates `^PW` / `^LL`
- [ ] Backend tests pass: `cd backend && npm test`

## Steps
1. Create `README.md` at project root with the content above (use real triple-backtick code fences)
2. Run backend tests: `cd backend && npm test` — confirm all tests pass
3. Confirm app is working (it was verified in Task 9 — you can note this in the report)
4. Commit: `git add README.md && git commit -m "docs: add README with setup and architecture overview"`

## Report File
Write to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-10-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- README created
- Backend test results (pass count)
- Git commit hash
- Verification checklist status
