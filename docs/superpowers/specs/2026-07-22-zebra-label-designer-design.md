# Zebra Label Designer — Design Spec
**Date:** 2026-07-22
**Status:** Approved

---

## Context

Warehouse/logistics operators and developers need a tool to design Zebra printer labels visually and in ZPL code. Operators work in the Design canvas (drag, drop, resize); developers tweak the raw ZPL in the Code editor. Both views stay in sync at all times. The tool is a web app with a React frontend and a Node.js/Express backend in a monorepo.

---

## Goals

- Visual drag-and-drop label canvas with live ZPL generation
- Monaco-based ZPL code editor with "Apply to Design" to push code back to canvas
- Support custom label dimensions (any width × height)
- Elements: Text, Code 128 Barcode, QR Code, Rectangle, Image placeholder
- Single-repo, single npm workspace, fast local dev setup

---

## Non-Goals

- Actual printer communication (no direct Zebra SDK integration in v1)
- Image upload/embed (placeholder box only in v1)
- Multi-page / template system
- Authentication or user management

---

## Repository Layout

```
etiqueta_zpl/
├── package.json              # npm workspaces root
├── README.md
├── frontend/
│   ├── package.json
│   ├── vite.config.ts        # proxies /api → localhost:3001
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx           # top-level layout
│       ├── store/
│       │   └── useDesignerStore.ts   # zustand store (elements, label dims, zpl code)
│       ├── components/
│       │   ├── Toolbar.tsx           # label size inputs + zoom controls
│       │   ├── Sidebar.tsx           # component palette (drag sources)
│       │   ├── Canvas.tsx            # dot-grid canvas, drop target, element renderer
│       │   ├── elements/
│       │   │   ├── TextElement.tsx
│       │   │   ├── BarcodeElement.tsx   # Code 128 via JsBarcode
│       │   │   ├── QRCodeElement.tsx    # QR via qrcode lib
│       │   │   ├── RectElement.tsx
│       │   │   └── ImagePlaceholder.tsx
│       │   ├── ResizeHandle.tsx       # 8-handle resize UI
│       │   ├── PropertiesPanel.tsx    # right panel: x,y,w,h,value,font,barcode type
│       │   ├── CodeEditor.tsx         # Monaco editor tab + Apply to Design button
│       │   └── TabSwitcher.tsx        # Design | Code tab toggle
│       └── utils/
│           └── zplClient.ts           # fetch wrappers for /api/generate-zpl, /api/parse-zpl, /api/preview
├── backend/
│   ├── package.json
│   ├── src/
│   │   ├── index.ts           # Express app entry
│   │   ├── routes/
│   │   │   └── zpl.ts         # POST /api/generate-zpl, /api/parse-zpl, /api/preview
│   │   └── zpl/
│   │       ├── generator.ts   # elements[] + dims → ZPL string
│   │       └── parser.ts      # ZPL string → elements[] + dims
│   └── tsconfig.json
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-07-22-zebra-label-designer-design.md
```

---

## Frontend Architecture

### State — `useDesignerStore` (Zustand)

```ts
interface DesignerState {
  // Label
  labelWidth: number        // mm
  labelHeight: number       // mm

  // Elements
  elements: Element[]
  selectedId: string | null

  // Editor
  activeTab: 'design' | 'code'
  zplCode: string           // kept in sync with elements

  // Actions
  addElement(el: Element): void
  updateElement(id: string, patch: Partial<Element>): void
  deleteElement(id: string): void
  setZplCode(code: string): void
  applyCodeToDesign(): void   // triggers POST /api/parse-zpl
}
```

### Element Model

```ts
type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'image-placeholder'

interface Element {
  id: string
  type: ElementType
  x: number          // dots (203 dpi)
  y: number          // dots
  width: number      // dots
  height: number     // dots
  value?: string     // text content or barcode data
  fontSize?: number  // for text (ZPL font size)
  fontName?: string  // ZPL font identifier (e.g. "0")
}
```

### Canvas Behaviour

- Dot-grid background (CSS), scaled so 1 ZPL dot = configurable px (default: 2px/dot)
- Each element is absolutely positioned on the canvas
- Click to select → shows 8 resize handles + selection border
- Drag element to reposition (via `@dnd-kit`)
- Drag resize handle to resize
- Any mutation → debounced (200ms) call to `POST /api/generate-zpl` → updates `zplCode` in store

### Tabs

- **Design tab:** canvas visible, code editor hidden
- **Code tab:** Monaco editor visible showing current `zplCode`; "Apply to Design" button calls `POST /api/parse-zpl` with editor content → updates `elements[]` + `labelWidth/Height` → switches to Design tab

### Properties Panel (right sidebar)

Shows fields for the selected element:
- All elements: X, Y, Width, Height (editable inputs, in mm with dot conversion)
- Text: Value, Font, Font Size
- Barcode128 / QRCode: Value
- Rect / Image placeholder: no extra fields

---

## Backend Architecture

### `POST /api/generate-zpl`

**Input:**
```json
{
  "labelWidth": 800,
  "labelHeight": 1200,
  "elements": [ { "id": "...", "type": "text", "x": 80, "y": 80, "value": "Hello", "fontSize": 34 } ]
}
```

**Output:**
```json
{ "zpl": "^XA\n^PW800\n^LL1200\n^FO80,80^A0N,34,34^FDHello^FS\n^XZ" }
```

**ZPL generation rules per element type:**

| Type | ZPL Output |
|---|---|
| `text` | `^FO{x},{y}^A{fontName}N,{fontSize},{fontSize}^FD{value}^FS` |
| `barcode128` | `^FO{x},{y}^BCN,{height},Y,N,N^FD{value}^FS` |
| `qrcode` | `^FO{x},{y}^BQN,2,{magnification}^FDMA,{value}^FS` |
| `rect` | `^FO{x},{y}^GB{width},{height},8^FS` |
| `image-placeholder` | `^FO{x},{y}^GB{width},{height},3,B,5^FS` (dashed border style) |

---

### `POST /api/parse-zpl`

Parses ZPL string back into `elements[]` using regex matching on known command sequences.

**Supported parsing targets:**

| ZPL Pattern | Parsed As |
|---|---|
| `^PW(\d+)` | `labelWidth` |
| `^LL(\d+)` | `labelHeight` |
| `^FO(\d+),(\d+)\^A(\w)N,(\d+),(\d+)\^FD(.+?)\^FS` | `text` element |
| `^FO(\d+),(\d+)\^BCN,(\d+).*\^FD(.+?)\^FS` | `barcode128` |
| `^FO(\d+),(\d+)\^BQN.*\^FDMA,(.+?)\^FS` | `qrcode` |
| `^FO(\d+),(\d+)\^GB(\d+),(\d+),(\d+)\^FS` | `rect` |

Unknown/unparseable commands are preserved as-is and flagged in response metadata (non-breaking).

---

### `POST /api/preview`

Proxies request to [Labelary API](http://labelary.com/service.html):
```
GET http://api.labelary.com/v1/printers/8dpmm/labels/{width}x{height}/0/
```
Returns PNG image bytes directly to the client. Optional — frontend shows a "Preview" button that opens a modal with the rendered image.

---

## Bidirectional Sync Contract

```
Design change  →  debounced 200ms  →  POST /api/generate-zpl  →  update zplCode
Code "Apply"   →  POST /api/parse-zpl  →  update elements[]   →  switch to Design tab
```

Both directions go through the backend — the frontend never constructs or parses ZPL directly. This keeps all ZPL logic in one place and testable.

---

## Key Libraries

| Layer | Package | Purpose |
|---|---|---|
| Frontend | `react` 18, `vite`, `typescript` | UI framework |
| Frontend | `@dnd-kit/core`, `@dnd-kit/utilities` | Drag-and-drop |
| Frontend | `@monaco-editor/react` | ZPL code editor |
| Frontend | `jsbarcode` | Render Code 128 barcodes in canvas |
| Frontend | `qrcode` | Render QR codes as data URLs |
| Frontend | `zustand` | Global designer state |
| Frontend | `tailwindcss` | Styling |
| Backend | `express`, `cors`, `typescript` | API server |
| Backend | `ts-node-dev` | Dev hot-reload |
| Backend | `zod` | Request validation |

---

## Local Dev Setup

```bash
# Root
npm install          # installs all workspaces

# Terminal 1
cd backend && npm run dev     # Express on :3001

# Terminal 2
cd frontend && npm run dev    # Vite on :5173, /api proxied to :3001
```

---

## Verification Plan

1. **Unit:** `backend/src/zpl/generator.ts` and `parser.ts` have test files (`*.test.ts`) covering round-trips: `elements → ZPL → elements` must produce identical output.
2. **Integration:** Postman / curl `POST /api/generate-zpl` with a known element set, confirm ZPL string matches expected output.
3. **E2E:** Open app → drag a Text element → switch to Code tab → confirm ZPL contains `^FD` with the default text → edit the value in Code → click "Apply to Design" → confirm canvas text updated.
4. **Preview:** Click Preview button → modal shows PNG rendered by Labelary.
