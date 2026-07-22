# Task 9: Code Editor Tab + App Layout

## Context
Task 9 of 10 — Zebra Label Designer. All components exist. You are creating the final 3 files: TabSwitcher, CodeEditor (Monaco + "Apply to Design"), and replacing the placeholder App.tsx with the real layout. Then verifying the full app runs.

## Global Constraints
- TypeScript strict mode
- Backend on port 3001, frontend on 5173
- Project root: `c:/Pedro/projects/etiqueta_zpl`

## Files to Create/Replace

### `frontend/src/components/TabSwitcher.tsx`
```typescript
import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

export function TabSwitcher() {
  const { activeTab, setActiveTab } = useDesignerStore();

  return (
    <div className="flex justify-center items-center gap-1 py-2 bg-white border-b border-gray-200">
      <div className="flex rounded-full border border-gray-200 overflow-hidden text-sm">
        <button
          onClick={() => setActiveTab('design')}
          className={`px-4 py-1.5 flex items-center gap-1.5 transition-colors ${
            activeTab === 'design' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span>⊞</span> Design
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-1.5 flex items-center gap-1.5 transition-colors ${
            activeTab === 'code' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span>&lt;/&gt;</span> Code
        </button>
      </div>
    </div>
  );
}
```

### `frontend/src/components/CodeEditor.tsx`
```typescript
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDesignerStore } from '../store/useDesignerStore';
import { previewZpl } from '../utils/zplClient';

export function CodeEditor() {
  const { zplCode, setZplCode, applyCodeToDesign, labelWidth, labelHeight, setPreviewUrl, previewUrl } = useDesignerStore();
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = async () => {
    const url = await previewZpl(zplCode, labelWidth, labelHeight);
    setPreviewUrl(url);
    setShowPreview(true);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">ZPL Code</span>
        <div className="flex gap-2">
          <button
            onClick={handlePreview}
            className="text-xs px-3 py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-600"
          >
            Preview
          </button>
          <button
            onClick={applyCodeToDesign}
            className="text-xs px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Apply to Design
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="plaintext"
          theme="vs-dark"
          value={zplCode}
          onChange={v => setZplCode(v ?? '')}
          options={{ fontSize: 13, minimap: { enabled: false }, lineNumbers: 'on', scrollBeyondLastLine: false }}
        />
      </div>
      {showPreview && previewUrl && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowPreview(false)}
        >
          <div className="bg-white rounded p-4 shadow-xl max-w-lg" onClick={e => e.stopPropagation()}>
            <p className="text-sm font-medium mb-2">Label Preview (Labelary)</p>
            <img src={previewUrl} alt="Label preview" className="max-w-full" />
            <button
              onClick={() => setShowPreview(false)}
              className="mt-3 w-full text-sm text-gray-600 border border-gray-200 rounded py-1 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### `frontend/src/App.tsx` (REPLACE the placeholder)
```typescript
import React from 'react';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { PropertiesPanel } from './components/PropertiesPanel';
import { TabSwitcher } from './components/TabSwitcher';
import { CodeEditor } from './components/CodeEditor';
import { useDesignerStore } from './store/useDesignerStore';

export default function App() {
  const { activeTab } = useDesignerStore();

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Toolbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabSwitcher />
          <div className="flex-1 overflow-hidden">
            {activeTab === 'design' ? <Canvas /> : <CodeEditor />}
          </div>
        </div>
        <PropertiesPanel />
      </div>
    </div>
  );
}
```

## Verification Steps
After creating all 3 files, start both servers and verify the app:

```bash
# Start backend (keep running in background):
cd c:/Pedro/projects/etiqueta_zpl/backend
npx ts-node-dev --respawn --transpile-only src/index.ts &

# Start frontend:
cd c:/Pedro/projects/etiqueta_zpl/frontend
npm run dev
```

Verify these work (use browser/playwright or curl):
1. App loads at http://localhost:5173 — 3-column layout visible
2. Click "Text" in sidebar → text element appears on canvas
3. Switch to "Code" tab → Monaco editor shows ZPL with `^FDNew Text^FS`
4. Edit text value in code editor → click "Apply to Design" → canvas text updates

If you cannot run both servers simultaneously, run just the frontend dev build check:
```bash
cd c:/Pedro/projects/etiqueta_zpl/frontend
npx tsc --noEmit
```
This verifies TypeScript compiles without errors.

## Commit
```bash
cd c:/Pedro/projects/etiqueta_zpl
git add frontend/src/
git commit -m "feat: complete frontend with tab switcher, code editor, and app layout"
```

## Report File
Write to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-9-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- Files created/modified
- TypeScript check result OR server verification result
- Git commit hash
- Any concerns
