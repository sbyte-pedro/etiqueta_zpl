# Final Fix Report — 2026-07-22

## Build Result
`cd backend && npm run build` — **0 TypeScript errors**

## Fixes Applied

### Fix 1 — Unconditional JWT_SECRET guard (`backend/src/index.ts`)
Removed the `&& process.env.NODE_ENV === 'production'` condition.
JWT_SECRET is now required unconditionally at startup.

### Fix 2 — Remove `better-sqlite3` (now unused)
- `backend/package.json`: removed `"better-sqlite3": "^12.11.1"` from `dependencies` and `"@types/better-sqlite3": "^7.6.13"` from `devDependencies`.
- Root `package.json`: removed the `"allowScripts"` block entirely.
- `npm install` run from repo root — 33 packages removed, `package-lock.json` updated.

### Fix 3 — `__dirname`-relative migrate path (`backend/src/db/migrate.ts`)
Replaced `'./drizzle'` with `path.join(__dirname, '../../drizzle')`.
Added `import path from 'path'`. Compiled output at `dist/db/migrate.js` resolves to the project root's `drizzle/` folder regardless of working directory.

## Commit
See git log for commit hash: `fix: unconditional JWT_SECRET guard, remove better-sqlite3, fix migrate path`
