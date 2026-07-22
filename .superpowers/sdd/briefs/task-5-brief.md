# Task 5: Frontend Scaffold + Zustand Store

## Context
Task 5 of 10 — Zebra Label Designer. Backend is fully complete (Tasks 1-4). You are scaffolding the entire frontend: Vite+React+TypeScript project, Tailwind CSS, the Zustand store, and the API client utilities.

## Global Constraints
- TypeScript strict mode
- Project root: `c:/Pedro/projects/etiqueta_zpl`
- Frontend on port 5173, /api proxied to http://localhost:3001
- ZPL coordinates in dots (203 dpi); display in mm: `dots = Math.round(mm * 8.03)`
- Canvas scale: 2px per dot

## Files to Create (all paths relative to project root)

### `frontend/package.json`
```json
{
  "name": "etiqueta-zpl-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.1.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@monaco-editor/react": "^4.6.0",
    "jsbarcode": "^3.11.6",
    "qrcode": "^1.5.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@types/jsbarcode": "^3.11.5",
    "@types/qrcode": "^1.5.5",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.12"
  }
}
```

### `frontend/tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  },
  "include": ["src"]
}
```

### `frontend/vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
```

### `frontend/tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

### `frontend/postcss.config.js`
```javascript
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

### `frontend/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zebra Label Designer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `frontend/src/types.ts`
```typescript
export type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'image-placeholder';

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
}
```

### `frontend/src/utils/zplClient.ts`
```typescript
import { DesignElement } from '../types';

export interface GeneratePayload {
  labelWidth: number;
  labelHeight: number;
  elements: DesignElement[];
}

export interface ParseResult {
  labelWidth: number;
  labelHeight: number;
  elements: DesignElement[];
  unknownCommands: string[];
}

export async function generateZpl(payload: GeneratePayload): Promise<string> {
  const res = await fetch('/api/generate-zpl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data.zpl as string;
}

export async function parseZpl(zpl: string): Promise<ParseResult> {
  const res = await fetch('/api/parse-zpl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zpl }),
  });
  return res.json();
}

export async function previewZpl(zpl: string, labelWidth: number, labelHeight: number): Promise<string> {
  const res = await fetch('/api/preview', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zpl, labelWidth, labelHeight }),
  });
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
```

### `frontend/src/store/useDesignerStore.ts`
```typescript
import { create } from 'zustand';
import { DesignElement, ElementType } from '../types';
import { generateZpl, parseZpl } from '../utils/zplClient';

let idCounter = 0;
const nextId = () => `el-${Date.now()}-${++idCounter}`;

const DEFAULT_SIZES: Record<ElementType, { width: number; height: number }> = {
  text: { width: 200, height: 40 },
  barcode128: { width: 300, height: 100 },
  qrcode: { width: 100, height: 100 },
  rect: { width: 200, height: 100 },
  'image-placeholder': { width: 150, height: 150 },
};

const DEFAULT_VALUES: Partial<Record<ElementType, Partial<DesignElement>>> = {
  text: { value: 'New Text', fontSize: 34, fontName: '0' },
  barcode128: { value: '123456789' },
  qrcode: { value: 'https://example.com' },
};

interface DesignerStore {
  labelWidth: number;
  labelHeight: number;
  elements: DesignElement[];
  selectedId: string | null;
  activeTab: 'design' | 'code';
  zplCode: string;
  previewUrl: string | null;
  setLabelSize(width: number, height: number): void;
  addElement(type: ElementType, x?: number, y?: number): void;
  updateElement(id: string, patch: Partial<DesignElement>): void;
  deleteElement(id: string): void;
  selectElement(id: string | null): void;
  setActiveTab(tab: 'design' | 'code'): void;
  setZplCode(code: string): void;
  syncToCode(): Promise<void>;
  applyCodeToDesign(): Promise<void>;
  setPreviewUrl(url: string | null): void;
}

let syncTimeout: ReturnType<typeof setTimeout> | null = null;

export const useDesignerStore = create<DesignerStore>((set, get) => ({
  labelWidth: 800,
  labelHeight: 1200,
  elements: [],
  selectedId: null,
  activeTab: 'design',
  zplCode: '^XA\n^PW800\n^LL1200\n^XZ',
  previewUrl: null,

  setLabelSize(width, height) {
    set({ labelWidth: width, labelHeight: height });
    get().syncToCode();
  },

  addElement(type, x = 50, y = 50) {
    const el: DesignElement = {
      id: nextId(),
      type,
      x,
      y,
      ...DEFAULT_SIZES[type],
      ...DEFAULT_VALUES[type],
    };
    set(s => ({ elements: [...s.elements, el], selectedId: el.id }));
    get().syncToCode();
  },

  updateElement(id, patch) {
    set(s => ({ elements: s.elements.map(e => e.id === id ? { ...e, ...patch } : e) }));
    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => get().syncToCode(), 200);
  },

  deleteElement(id) {
    set(s => ({
      elements: s.elements.filter(e => e.id !== id),
      selectedId: s.selectedId === id ? null : s.selectedId,
    }));
    get().syncToCode();
  },

  selectElement(id) {
    set({ selectedId: id });
  },

  setActiveTab(tab) {
    set({ activeTab: tab });
  },

  setZplCode(code) {
    set({ zplCode: code });
  },

  async syncToCode() {
    const { labelWidth, labelHeight, elements } = get();
    try {
      const zpl = await generateZpl({ labelWidth, labelHeight, elements });
      set({ zplCode: zpl });
    } catch (e) {
      console.error('ZPL sync failed', e);
    }
  },

  async applyCodeToDesign() {
    const { zplCode } = get();
    try {
      const result = await parseZpl(zplCode);
      set({
        elements: result.elements,
        labelWidth: result.labelWidth || get().labelWidth,
        labelHeight: result.labelHeight || get().labelHeight,
        activeTab: 'design',
        selectedId: null,
      });
    } catch (e) {
      console.error('Parse ZPL failed', e);
    }
  },

  setPreviewUrl(url) {
    set({ previewUrl: url });
  },
}));
```

### `frontend/src/main.tsx`
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `frontend/src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; }
```

### `frontend/src/App.tsx` (placeholder — will be replaced in Task 9)
```typescript
import React from 'react';

export default function App() {
  return <div className="p-4 text-gray-700">Zebra Label Designer — loading...</div>;
}
```

## Steps
1. Create all directories: `frontend/src/store/`, `frontend/src/utils/`, `frontend/src/components/elements/`
2. Create all files listed above with exact content
3. Run `npm install` from project root to install frontend deps
4. Verify Vite can start: `cd frontend && npm run dev` — should show "Local: http://localhost:5173" — then kill it (Ctrl+C)
5. Commit: `git add frontend/ && git commit -m "feat: frontend scaffold with Zustand store and ZPL client utils"`

## Report File
Write your full report to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-5-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- Files created (list)
- npm install output (success/errors)
- Vite start confirmation
- Git commit hash
- Any concerns
