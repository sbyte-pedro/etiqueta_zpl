# Zebra Label Designer

A web-based visual designer for Zebra printer labels. Draw labels by dragging elements onto a canvas and inspect or edit the raw ZPL code in a code editor — both views stay in sync at all times. Labels are saved as versioned designs tied to a user account.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [Element Types](#element-types)
- [Bidirectional Sync](#bidirectional-sync)
- [Save & Load](#save--load)
- [Authentication](#authentication)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

---

## Quick Start

**Requirements:** Node.js >= 18, PostgreSQL running locally.

```bash
# 1. Install all workspace dependencies from the repo root
npm install

# 2. Create a local database
createdb etiqueta_dev

# 3. Set required environment variables for the backend
#    (add these to your shell profile or a local .env loader)
export DATABASE_URL=postgresql://localhost/etiqueta_dev
export JWT_SECRET=any-random-secret-string

# 4. Start backend (Terminal 1) — runs on http://localhost:3001
npm run dev:backend

# 5. Start frontend (Terminal 2) — runs on http://localhost:5173
npm run dev:frontend
```

The backend runs migrations automatically on first start — no manual SQL needed.

Open [http://localhost:5173](http://localhost:5173), register an account, and start designing.

---

## Features

### Canvas Designer

- **Drag elements from the sidebar** onto the canvas: Text, Barcode 128, QR Code, Box (rectangle), Line, Image Placeholder
- **Select and move** elements by dragging them
- **Resize** any element with 8 directional handles (n, s, e, w, ne, nw, se, sw)
- **Delete** a selected element with the `Delete` key or the button in the Properties Panel
- **Dot-grid background** that scales with zoom to help with alignment
- **Click canvas background** to deselect the current element

### ZPL Code Editor

- Monaco-based editor (same engine as VS Code) showing the live ZPL output
- **Edits sync back to the canvas** automatically after a 600ms pause in typing
- **Invalid ZPL** shows a red error banner above the editor without crashing the canvas
- Unknown ZPL commands are ignored gracefully — recognized elements are still parsed

### Zoom Controls

| Action | Result |
|---|---|
| `−` button | Zoom out by 25% |
| `+` button | Zoom in by 25% |
| Click percentage | Reset to 100% (default) |

Zoom range: 25% – 300%. The displayed percentage uses 2× as the baseline (zoom value 2.0 = 100%).

### Label Dimensions

Set label **width** and **height** in mm via the toolbar. Internally converted to ZPL dots at 8.03 dots/mm (standard 203 DPI). Changing dimensions immediately regenerates the ZPL.

### Labelary Preview

`POST /api/preview` proxies the label to the [Labelary public API](http://labelary.com/service.html) and returns a PNG render. The client utility (`zplClient.ts`) is wired up; connect it to a UI button to display a render preview.

---

## Architecture Overview

```
etiqueta_zpl/
├── frontend/          React 18 + Vite + TypeScript + Tailwind + Zustand
└── backend/           Node.js + Express + TypeScript + Drizzle ORM + PostgreSQL
```

**Monorepo** using npm workspaces. `npm install` at the root installs both packages.

**Core principle:** the backend owns all ZPL logic. The frontend never constructs or parses ZPL strings directly — it sends design state to the backend and receives ZPL back.

```
Canvas change
  → POST /api/generate-zpl  (debounced 200ms)
  → ZPL string written to Monaco editor

Monaco edit (600ms pause)
  → POST /api/parse-zpl
  → elements[] written back to canvas
```

### Key files

| File | Purpose |
|---|---|
| `backend/src/zpl/generator.ts` | `elements[] + dims → ZPL string` |
| `backend/src/zpl/parser.ts` | `ZPL string → elements[] + dims` |
| `backend/src/db/schema.ts` | Drizzle table definitions |
| `backend/src/db/database.ts` | Drizzle client singleton, migrations on startup |
| `frontend/src/store/useDesignerStore.ts` | All designer state (elements, ZPL, zoom, sync logic) |
| `frontend/src/store/useAuthStore.ts` | JWT token state |
| `frontend/src/store/useDesignsStore.ts` | Active design / version tracking |

### Tech stack

| Layer | Libraries |
|---|---|
| Frontend | React 18, Vite 5, TypeScript 5.3, Tailwind CSS 3, Zustand |
| Drag-and-drop | `@dnd-kit/core`, `@dnd-kit/utilities` |
| Code editor | `@monaco-editor/react` |
| Barcode / QR | `jsbarcode`, `qrcode` |
| Backend | Express 4, TypeScript, Drizzle ORM, `pg` |
| Auth | `bcryptjs`, `jsonwebtoken` |
| Validation | Zod |
| DB migrations | `drizzle-kit` |
| Tests | Jest + ts-jest |

---

## Element Types

All positions and sizes are stored in **ZPL dots** (203 DPI → 8.03 dots/mm). The Properties Panel displays and accepts values in **mm**.

| Type | Default size (dots) | ZPL command |
|---|---|---|
| `text` | 200 × 40 | `^FO{x},{y}^A{font}N,{size},{size}^FD{value}^FS` |
| `barcode128` | 300 × 100 | `^FO{x},{y}^BCN,{height},Y,N,N^FD{value}^FS` |
| `qrcode` | 100 × 100 | `^FO{x},{y}^BQN,2,{mag}^FDMA,{value}^FS` |
| `rect` | 200 × 100 | `^FO{x},{y}^GB{w},{h},8^FS` |
| `line` | 200 × 8 | `^FO{x},{y}^GB{w},{h},3^FS` |
| `image-placeholder` | 150 × 150 | `^FO{x},{y}^GB{w},{h},3,B,5^FS` |

**Line orientation** is determined at render time: if width ≥ height, it is horizontal; otherwise vertical. This is reflected in both the canvas visual and the ZPL output.

**QR magnification** is computed automatically: `max(1, round(width / 40))`.

### Properties per element type

| Type | Editable fields |
|---|---|
| All | X, Y, Width, Height (mm) |
| `text` | Value, Font Size |
| `barcode128`, `qrcode` | Value |
| `rect`, `line`, `image-placeholder` | — |

---

## Bidirectional Sync

### Canvas → Code

Any canvas change (add, move, resize, delete, label size change) triggers a call to `POST /api/generate-zpl`. The result updates the Monaco editor. Rapid changes are batched with a 200ms debounce on `updateElement`.

### Code → Canvas

Every keystroke in the Monaco editor calls `onCodeChange`. After a **600ms pause**, it calls `POST /api/parse-zpl`. Recognized elements replace the canvas state; unrecognized ZPL commands are listed in `unknownCommands` and ignored without error.

### Infinite-loop prevention

The store maintains a `lastCanvasZpl` sentinel. When the code editor receives a new ZPL value that was just generated by the canvas, `onCodeChange` returns immediately without triggering a re-parse. This prevents the cycle: canvas change → editor update → `onChange` fires → re-parses → updates canvas → re-generates → …

### ZPL parse errors

If `POST /api/parse-zpl` returns an error, a red banner appears above the editor with the message. The canvas is not modified. The banner clears on the next successful parse.

---

## Save & Load

Designs are stored per user in a three-level hierarchy: **user → design → versions**.

### Saving

| Mode | When | What happens |
|---|---|---|
| New design | First save, or user chooses "New design" | Creates a design record + version 1 |
| New version | User chooses "New version" | Appends the next incremented version |
| Overwrite | User chooses "Overwrite v{N}" | Replaces the current version's content in-place |

Design names are unique per user. Versions within a design are numbered from 1 and are never renumbered.

### Loading

The Load modal shows all your designs. Clicking a design reveals its version list. Clicking any version loads it into the canvas immediately (sets elements, ZPL code, and label dimensions).

### My Designs page

The My Designs page is a card grid showing all designs with:
- Version count
- Last-updated relative timestamp
- Expandable version list (lazy-loaded on demand)
- "Open latest" shortcut — loads the highest-numbered version
- Per-version individual load buttons
- Delete (prompts confirmation, cascades to all versions)

### Active design indicator

When a design is loaded, its name appears in the toolbar next to the app title. The save modal defaults to "Overwrite" or "New version" rather than "New design" when a design is active.

---

## Authentication

### Registration & Login

- Register with username (min 3 chars) and password (min 6 chars)
- Registering automatically logs you in (no separate step)
- Session is a JWT stored in `localStorage` under the key `zpl_token`, valid for 7 days
- Refreshing the page preserves the session

### Logout

Click the Logout button in the toolbar. The token is removed from localStorage immediately and the login screen appears.

### Security notes

- Passwords are hashed with bcrypt (cost factor 10)
- JWT is signed with `JWT_SECRET` — **keep this value secret and never commit it**
- The server refuses to start if `JWT_SECRET` is not set
- CORS is restricted to `FRONTEND_URL` (default: `http://localhost:5173`)
- All `/api/designs` and `/api/generate-zpl` / `/api/parse-zpl` / `/api/preview` routes require a valid JWT

---

## Environment Variables

### Backend

| Variable | Required | Default | Description |
|---|---|---|---|
| `DATABASE_URL` | **Yes** | — | PostgreSQL connection string. Server will not start without it. Example: `postgresql://user:pass@localhost:5432/etiqueta_dev` |
| `JWT_SECRET` | **Yes** | — | Secret for signing and verifying JWTs. Server will not start without it. Generate with `openssl rand -hex 32`. |
| `PORT` | No | `3001` | Port for the Express server |
| `FRONTEND_URL` | No | `http://localhost:5173` | Allowed CORS origin |

### Frontend

| Variable | Required | Default | Description |
|---|---|---|---|
| `VITE_API_URL` | No | `''` | Base URL for API calls. Leave unset in local dev — Vite proxy handles `/api/*` automatically. Set to the backend's full URL when deploying (e.g. `https://api.yourdomain.com`). |

See `frontend/.env.example` for reference.

---

## API Reference

### Public endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Health check. Returns `{ ok: true }` |
| `POST` | `/api/auth/register` | Register. Body: `{ username, password }`. Returns 201 or 409 |
| `POST` | `/api/auth/login` | Login. Body: `{ username, password }`. Returns `{ token }` or 401 |

### Protected endpoints (require `Authorization: Bearer <token>`)

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/generate-zpl` | Generate ZPL from design. Returns `{ zpl: string }` |
| `POST` | `/api/parse-zpl` | Parse ZPL to elements. Returns `{ elements, labelWidth, labelHeight, unknownCommands }` |
| `POST` | `/api/preview` | Proxy to Labelary. Returns PNG binary |
| `GET` | `/api/designs` | List current user's designs |
| `POST` | `/api/designs` | Create new design + first version |
| `GET` | `/api/designs/:id` | Get design summary |
| `DELETE` | `/api/designs/:id` | Delete design and all its versions |
| `GET` | `/api/designs/:id/versions` | List versions for a design |
| `POST` | `/api/designs/:id/versions` | Create a new version |
| `GET` | `/api/designs/:id/versions/:vn` | Get a specific version |
| `PUT` | `/api/designs/:id/versions/:vn` | Overwrite a specific version |

---

## Database Schema

Three tables, all managed by Drizzle migrations (run automatically on startup).

```
users
  id            serial PK
  username      text UNIQUE NOT NULL
  password_hash text NOT NULL
  created_at    timestamp DEFAULT now()

designs
  id         serial PK
  user_id    integer FK → users.id ON DELETE CASCADE
  name       text NOT NULL
  created_at timestamp DEFAULT now()
  updated_at timestamp DEFAULT now()
  UNIQUE(user_id, name)

design_versions
  id             serial PK
  design_id      integer FK → designs.id ON DELETE CASCADE
  version_number integer NOT NULL
  zpl            text NOT NULL
  elements_json  text NOT NULL   ← JSON-encoded elements array
  label_width    integer NOT NULL
  label_height   integer NOT NULL
  created_at     timestamp DEFAULT now()
  UNIQUE(design_id, version_number)
```

Deleting a user cascades to all their designs and versions. Deleting a design cascades to all its versions.

### Generating a new migration

If you change `backend/src/db/schema.ts`:

```bash
DATABASE_URL=postgresql://localhost/etiqueta_dev npm run db:generate --workspace=backend
```

The generated SQL file is committed to `backend/drizzle/` and applied automatically on the next server start.

---

## Running Tests

Tests live in the backend only. They require a running PostgreSQL instance.

```bash
# Create the test database (one-time)
createdb etiqueta_test

# Run all tests
cd backend && npm test
```

The tests set `DATABASE_URL=postgresql://localhost/etiqueta_test` by default. Override by setting the env var before running.

Each test suite truncates the database tables in the correct foreign-key order (`design_versions → designs → users`) before each test to ensure isolation.

### What is tested

- **`zpl/generator.test.ts`** — unit tests for each element type's ZPL output, no database
- **`zpl/parser.test.ts`** — round-trip tests: `elements → ZPL → elements` must reproduce original state; unknown commands do not crash
- **`auth/authService.test.ts`** — register, duplicate username, login, invalid credentials
- **`designs/designsService.test.ts`** — create, list, get, delete designs; create/list/get versions; ownership isolation between users

---

## Project Structure

```
etiqueta_zpl/
├── package.json                  # npm workspaces root
├── frontend/
│   ├── vite.config.ts            # dev server + /api proxy to :3001
│   ├── src/
│   │   ├── App.tsx               # root layout, auth gate, page routing
│   │   ├── types.ts              # DesignElement type definition
│   │   ├── store/
│   │   │   ├── useDesignerStore.ts   # canvas state + sync logic
│   │   │   ├── useAuthStore.ts       # JWT token
│   │   │   └── useDesignsStore.ts    # active design/version tracking
│   │   ├── components/
│   │   │   ├── Canvas.tsx            # DnD canvas, element renderer
│   │   │   ├── Sidebar.tsx           # element palette
│   │   │   ├── Toolbar.tsx           # label size, save/load, logout
│   │   │   ├── PropertiesPanel.tsx   # selected element properties
│   │   │   ├── CodeEditor.tsx        # Monaco ZPL editor
│   │   │   ├── TabSwitcher.tsx       # Design/Code toggle + zoom controls
│   │   │   ├── SaveDesignModal.tsx   # save (new/version/overwrite)
│   │   │   ├── LoadDesignModal.tsx   # load from design/version list
│   │   │   ├── ResizeHandle.tsx      # 8-handle resize UI
│   │   │   └── elements/             # per-type visual renderers
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx         # register / login form
│   │   │   └── MyDesignsPage.tsx     # full-page design card grid
│   │   └── utils/
│   │       ├── zplClient.ts          # /api/generate-zpl, parse-zpl, preview
│   │       ├── authClient.ts         # /api/auth/*
│   │       └── designsClient.ts      # /api/designs/*
└── backend/
    ├── drizzle/                  # generated migration SQL files
    ├── drizzle.config.ts         # drizzle-kit config
    ├── src/
    │   ├── index.ts              # startup: env var guards, initDb, listen
    │   ├── app.ts                # Express app, CORS, route mounting
    │   ├── db/
    │   │   ├── schema.ts         # Drizzle table definitions
    │   │   ├── database.ts       # singleton client + initDb
    │   │   └── migrate.ts        # runs drizzle migrations
    │   ├── zpl/
    │   │   ├── generator.ts      # elements → ZPL
    │   │   ├── parser.ts         # ZPL → elements
    │   │   └── types.ts          # element type definitions
    │   ├── auth/
    │   │   └── authService.ts    # bcrypt + JWT
    │   ├── designs/
    │   │   └── designsService.ts # CRUD for designs and versions
    │   ├── middleware/
    │   │   └── authenticate.ts   # JWT verification middleware
    │   └── routes/
    │       ├── auth.ts
    │       ├── designs.ts
    │       ├── zpl.ts
    │       └── health.ts
```
