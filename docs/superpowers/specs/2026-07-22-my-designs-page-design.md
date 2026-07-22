# My Designs Page — Design Spec
**Date:** 2026-07-22
**Status:** Approved

---

## Context

Users need a dedicated page to browse all the label designs they have saved. The backend `GET /api/designs` already returns the full list with metadata. The existing "Load" modal is compact and version-focused; it is not meant as a browsing surface. A full-page view gives users a clear overview of their design library.

---

## Goals

- Show all designs owned by the logged-in user as a card grid
- Each card: name, version count, last updated (relative), Open and Delete actions
- "Open" loads the latest version into the canvas and returns to the designer
- "Delete" removes the design with a confirmation step
- Empty state when the user has no designs yet
- Navigate to/from the page via a "My Designs" button in the Toolbar and a "← Back to Editor" button on the page

---

## Non-Goals

- No search or filtering (out of scope for v1)
- No per-card version history browser (the Load modal already covers that)
- No rename functionality
- No pagination (designs list is expected to be small)

---

## Architecture

No new routing library. `App.tsx` adds a `currentView: 'designer' | 'my-designs'` state (default `'designer'`). When `currentView === 'my-designs'` the `<MyDesignsPage />` component renders instead of the designer layout. Modals (Save/Load) remain mounted only when `currentView === 'designer'`.

```
App.tsx
  currentView === 'designer'  →  existing layout (Toolbar + Canvas + etc.)
  currentView === 'my-designs' →  <MyDesignsPage onBack={() => setCurrentView('designer')} />
```

---

## File Map

```
frontend/src/
├── pages/
│   └── MyDesignsPage.tsx     CREATED
├── components/
│   └── Toolbar.tsx           MODIFIED — add "My Designs" button
└── App.tsx                   MODIFIED — add currentView state, render MyDesignsPage
```

`useDesignsStore` is reused as-is — `fetchDesigns()`, `designs`, `deleteDesign()`, `loadVersion()` are all already implemented.

---

## MyDesignsPage Component

**Props:** `onBack: () => void`

**Behaviour:**
- Calls `fetchDesigns()` on mount
- Renders a responsive card grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`)
- Empty state: centred message "No saved designs yet. Head back to the editor to create your first one."

**Each card:**
| Element | Detail |
|---|---|
| Name | Bold, truncated to 2 lines |
| Version count | `N version(s)` |
| Last updated | Relative: "today", "yesterday", "N days ago" |
| **Open** button | Calls `loadVersion(id, latestVersionNumber)` then `onBack()` — fetches latest via `apiListVersions(id)` to get the highest version number |
| **Delete** button | `window.confirm(...)` → `deleteDesign(id)` |

**Loading state:** shows a subtle "Loading…" message while `fetchDesigns` is in flight.

**Error state:** shows the `error` string from `useDesignsStore` if non-empty.

---

## Toolbar Change

Add a "My Designs" button between the Save/Load group and the Logout button:

```tsx
<button onClick={() => onNavigateToMyDesigns()}>My Designs</button>
```

`Toolbar` receives a new prop `onNavigateToMyDesigns: () => void`, called by `App.tsx` to set `currentView = 'my-designs'`.

---

## Data Flow

```
MyDesignsPage mounts
  → fetchDesigns() → GET /api/designs → designs[]

User clicks "Open" on a card
  → apiListVersions(id) → pick max versionNumber
  → loadVersion(id, maxVersion) → GET /api/designs/:id/versions/:n
  → useDesignerStore.setState({ elements, zpl, labelWidth, labelHeight })
  → onBack() → currentView = 'designer'

User clicks "Delete"
  → confirm dialog
  → deleteDesign(id) → DELETE /api/designs/:id
  → fetchDesigns() re-fetches the list
```

---

## Verification

1. Start both servers (`npm run dev:backend` + `npm run dev:frontend`)
2. Login → click "My Designs" in Toolbar → page renders
3. If no designs: empty state message shown
4. Save a design → navigate to My Designs → card appears with correct name, version count, date
5. Click "Open" → canvas loads the design → view switches back to designer
6. Click "Delete" → confirm → card disappears
7. Click "← Back to Editor" → designer view restored, canvas state unchanged
