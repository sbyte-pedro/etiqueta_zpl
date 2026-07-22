# Task 1: Monorepo Scaffold + Backend Boilerplate

## Context
This is Task 1 of 10 for the Zebra Label Designer — a full-stack monorepo app.
You are setting up the repo skeleton: npm workspaces root, backend package config, TypeScript config, Express entry point, and shared ZPL types.

## Global Constraints
- Node.js >= 18
- TypeScript strict mode in both workspaces
- Backend runs on port 3001
- No authentication, no printer communication, no image upload in this version
- Project root: `c:/Pedro/projects/etiqueta_zpl`

## Files to Create
- `c:/Pedro/projects/etiqueta_zpl/package.json` (root — npm workspaces)
- `c:/Pedro/projects/etiqueta_zpl/backend/package.json`
- `c:/Pedro/projects/etiqueta_zpl/backend/tsconfig.json`
- `c:/Pedro/projects/etiqueta_zpl/backend/src/zpl/types.ts`
- `c:/Pedro/projects/etiqueta_zpl/backend/src/index.ts`

## Interfaces Produced
The `types.ts` file must export these exact types (used verbatim by Tasks 2, 3, 4):

```typescript
export type ElementType = 'text' | 'barcode128' | 'qrcode' | 'rect' | 'image-placeholder';

export interface Element {
  id: string;
  type: ElementType;
  x: number;       // ZPL dots
  y: number;       // ZPL dots
  width: number;   // ZPL dots
  height: number;  // ZPL dots
  value?: string;
  fontSize?: number;
  fontName?: string;
}

export interface LabelDimensions {
  labelWidth: number;   // ZPL dots
  labelHeight: number;  // ZPL dots
}

export interface GenerateRequest extends LabelDimensions {
  elements: Element[];
}

export interface ParseResult extends LabelDimensions {
  elements: Element[];
  unknownCommands: string[];
}
```

## Exact File Contents

### `package.json` (root)
```json
{
  "name": "etiqueta-zpl",
  "private": true,
  "workspaces": ["frontend", "backend"],
  "scripts": {
    "dev:backend": "npm run dev --workspace=backend",
    "dev:frontend": "npm run dev --workspace=frontend"
  }
}
```

### `backend/package.json`
```json
{
  "name": "etiqueta-zpl-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.11",
    "@types/node": "^20.11.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}
```

NOTE: Do NOT include `node-fetch` — Node 18 has native `fetch`. Do NOT use `--experimental-vm-modules` in the test script (ts-jest with commonjs preset works without it).

### `backend/tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### `backend/src/index.ts`
```typescript
import express from 'express';
import cors from 'cors';
import { zplRouter } from './routes/zpl';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', zplRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
```

Note: `routes/zpl.ts` doesn't exist yet (Task 4) — `index.ts` will fail to compile until then. That's fine: the routes file will be created in Task 4. For now just create `index.ts` as above.

## Steps
1. Create all 5 files with exact content above
2. Run `npm install` from the project root (`c:/Pedro/projects/etiqueta_zpl`) — this bootstraps the workspace
3. Initialize git: `git init && git add package.json backend/ && git commit -m "feat: monorepo scaffold and backend boilerplate"`

## Report File
Write your full report to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-1-report.md`

## Report Contract
Your report must include:
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- List of files created
- Output of `npm install` (success/errors)
- Git commit hash
- Any concerns or deviations from the plan
