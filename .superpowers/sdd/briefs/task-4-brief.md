# Task 4: Express Routes + Preview Proxy

## Context
Task 4 of 10 — Zebra Label Designer. Tasks 1-3 complete (scaffold, generator, parser). You are wiring up the Express router with 3 endpoints and adding it to the existing `index.ts`.

## Global Constraints
- TypeScript strict mode
- Project root: `c:/Pedro/projects/etiqueta_zpl`
- Backend runs on port 3001
- Node 18 native `fetch` — do NOT add node-fetch

## Files to Create/Modify
- CREATE: `c:/Pedro/projects/etiqueta_zpl/backend/src/routes/zpl.ts`
- The `backend/src/index.ts` already imports `zplRouter` from `./routes/zpl` — no changes needed to index.ts

## Exact File Content

### `backend/src/routes/zpl.ts`
```typescript
import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { generateZpl } from '../zpl/generator';
import { parseZpl } from '../zpl/parser';

export const zplRouter = Router();

const ElementSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'barcode128', 'qrcode', 'rect', 'image-placeholder']),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  value: z.string().optional(),
  fontSize: z.number().optional(),
  fontName: z.string().optional(),
});

const GenerateSchema = z.object({
  labelWidth: z.number().positive(),
  labelHeight: z.number().positive(),
  elements: z.array(ElementSchema),
});

zplRouter.post('/generate-zpl', (req: Request, res: Response) => {
  const parsed = GenerateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  const zpl = generateZpl(parsed.data);
  res.json({ zpl });
});

zplRouter.post('/parse-zpl', (req: Request, res: Response) => {
  const schema = z.object({ zpl: z.string() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  const result = parseZpl(parsed.data.zpl);
  res.json(result);
});

zplRouter.post('/preview', async (req: Request, res: Response) => {
  const schema = z.object({
    zpl: z.string(),
    labelWidth: z.number().positive(),
    labelHeight: z.number().positive(),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  const { zpl, labelWidth, labelHeight } = parsed.data;
  // Convert dots to inches for Labelary (203 dpi)
  const wIn = (labelWidth / 203).toFixed(2);
  const hIn = (labelHeight / 203).toFixed(2);
  const url = `http://api.labelary.com/v1/printers/8dpmm/labels/${wIn}x${hIn}/0/`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'image/png' },
      body: `data=${encodeURIComponent(zpl)}`,
    });
    if (!response.ok) {
      res.status(502).json({ error: 'Labelary API error' });
      return;
    }
    const buffer = await response.arrayBuffer();
    res.set('Content-Type', 'image/png');
    res.send(Buffer.from(buffer));
  } catch (e) {
    res.status(502).json({ error: 'Could not reach Labelary API' });
  }
});
```

## Smoke Test
After creating the file, start the backend and test:

```bash
# Terminal 1: start backend
cd c:/Pedro/projects/etiqueta_zpl/backend && npm run dev

# Terminal 2: test generate-zpl endpoint
curl -s -X POST http://localhost:3001/api/generate-zpl \
  -H "Content-Type: application/json" \
  -d '{"labelWidth":800,"labelHeight":1200,"elements":[{"id":"1","type":"text","x":80,"y":80,"width":200,"height":40,"value":"Hello","fontSize":34,"fontName":"0"}]}'
```

Expected: `{"zpl":"^XA\n^PW800\n^LL1200\n^FO80,80^A0N,34,34^FDHello^FS\n^XZ"}`

Also test parse-zpl:
```bash
curl -s -X POST http://localhost:3001/api/parse-zpl \
  -H "Content-Type: application/json" \
  -d '{"zpl":"^XA\n^PW800\n^LL1200\n^FO80,80^A0N,34,34^FDHello^FS\n^XZ"}'
```
Expected: JSON with `elements` array containing 1 text element.

After verifying, kill the dev server (Ctrl+C).

## Commit
```bash
cd c:/Pedro/projects/etiqueta_zpl
git add backend/src/routes/ backend/src/index.ts
git commit -m "feat: Express ZPL routes with Zod validation and Labelary proxy"
```

## Report File
Write your full report to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-4-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- File created
- Smoke test output (curl responses)
- Git commit hash
- Any concerns
