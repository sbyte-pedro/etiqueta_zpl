# Side-by-Side Preview Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the preview panel from below the canvas to a right-side column that appears side-by-side with the canvas when Preview is active, and hide the PropertiesPanel while the preview is open.

**Architecture:** Two files change — `PreviewPanel.tsx` is refactored from a bottom-of-page panel to a right-side scrollable column, and `App.tsx` is updated to place it in the horizontal flex row alongside the canvas and to hide PropertiesPanel while preview is active. No store changes needed; the existing `previewUrl || previewLoading || previewError` condition already drives visibility.

**Tech Stack:** React, TypeScript, Tailwind CSS

## Global Constraints

- Preview column width: `labelWidth * zoom` CSS pixels — same as canvas label width
- PropertiesPanel hidden while `previewUrl || previewLoading || previewError` is truthy
- No animation — instant show/hide
- Preview column has its own vertical scroll (`overflow-y-auto`)
- `imageRendering: 'pixelated'`, `width: labelWidth * zoom`, `display: 'block'` on the preview image
- Tailwind CSS only — no new inline styles beyond what is necessary for dynamic width
- No backend changes

---

### Task 1: Refactor PreviewPanel into a right-side column component

**Files:**
- Modify: `frontend/src/components/PreviewPanel.tsx`

**Interfaces:**
- Consumes: `previewUrl`, `previewLoading`, `previewError`, `closePreview`, `labelWidth`, `zoom` from `useDesignerStore` (already imported)
- Produces: a component that renders as a self-contained right-side column — `null` when inactive, a bordered column when active

- [ ] **Step 1: Read the current file**

Read `frontend/src/components/PreviewPanel.tsx` to confirm current structure before editing.

- [ ] **Step 2: Replace the component with the column layout**

Replace the entire file content with:

```tsx
import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

export function PreviewPanel() {
  const { previewUrl, previewLoading, previewError, closePreview, labelWidth, zoom } = useDesignerStore();

  if (!previewUrl && !previewError && !previewLoading) return null;

  const colWidth = labelWidth * zoom;

  return (
    <div
      className="h-full bg-white border-l border-gray-200 flex flex-col overflow-hidden"
      style={{ width: colWidth, minWidth: colWidth, maxWidth: colWidth }}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 shrink-0">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Label Preview</span>
        <button
          onClick={closePreview}
          className="text-xs px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Close Preview
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {previewLoading && (
          <div className="text-xs text-gray-400 py-2">Loading…</div>
        )}

        {previewError && (
          <div className="text-xs text-red-500 bg-red-50 border border-red-200 rounded px-3 py-2">
            {previewError}
          </div>
        )}

        {previewUrl && (
          <img
            src={previewUrl}
            alt="Label preview"
            className="border border-gray-200 rounded shadow-sm"
            style={{ imageRendering: 'pixelated', width: colWidth, display: 'block' }}
          />
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/components/PreviewPanel.tsx
git commit -m "feat: refactor PreviewPanel into right-side column layout"
```

---

### Task 2: Update App.tsx layout — side-by-side split and hide PropertiesPanel

**Files:**
- Modify: `frontend/src/App.tsx`

**Interfaces:**
- Consumes from Task 1: `PreviewPanel` renders as a fixed-width right column or `null`
- Consumes from store: `previewUrl`, `previewLoading`, `previewError` to determine PropertiesPanel visibility

- [ ] **Step 1: Read the current file**

Read `frontend/src/App.tsx` to confirm current structure before editing.

- [ ] **Step 2: Update the import and layout**

Replace the entire file content with:

```tsx
import React, { useState } from 'react';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { PropertiesPanel } from './components/PropertiesPanel';
import { TabSwitcher } from './components/TabSwitcher';
import { CodeEditor } from './components/CodeEditor';
import { SaveDesignModal } from './components/SaveDesignModal';
import { PreviewPanel } from './components/PreviewPanel';
import { useDesignerStore } from './store/useDesignerStore';
import { useAuthStore } from './store/useAuthStore';
import { useDesignsStore } from './store/useDesignsStore';
import { LoginPage } from './pages/LoginPage';
import { MyDesignsPage } from './pages/MyDesignsPage';

type View = 'designer' | 'my-designs';

export default function App() {
  const { activeTab, previewUrl, previewLoading, previewError } = useDesignerStore();
  const { token } = useAuthStore();
  const { showSaveModal } = useDesignsStore();
  const [currentView, setCurrentView] = useState<View>('designer');

  if (!token) return <LoginPage />;

  if (currentView === 'my-designs') {
    return <MyDesignsPage onBack={() => setCurrentView('designer')} />;
  }

  const previewActive = !!(previewUrl || previewLoading || previewError);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Toolbar onNavigateToMyDesigns={() => setCurrentView('my-designs')} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onNavigateToMyDesigns={() => setCurrentView('my-designs')} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabSwitcher />
          <div className="flex flex-1 overflow-hidden">
            {activeTab === 'design' ? (
              <>
                <div className="flex-1 overflow-hidden">
                  <Canvas />
                </div>
                <PreviewPanel />
              </>
            ) : (
              <CodeEditor />
            )}
          </div>
        </div>
        {activeTab === 'design' && !previewActive && <PropertiesPanel />}
      </div>
      {showSaveModal && <SaveDesignModal />}
    </div>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd frontend && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Manual verification**

1. Start backend and frontend
2. Add a text element to the canvas
3. Click **Preview** — the preview panel should appear to the **right** of the canvas, PropertiesPanel should disappear
4. Verify the preview image aligns with the canvas label (same width)
5. Click **Close Preview** — preview panel disappears, PropertiesPanel returns
6. Confirm clicking an element after close shows its properties again
7. Kill the servers

- [ ] **Step 5: Commit**

```bash
git add frontend/src/App.tsx
git commit -m "feat: show preview side-by-side with canvas, hide PropertiesPanel while preview is active"
```
