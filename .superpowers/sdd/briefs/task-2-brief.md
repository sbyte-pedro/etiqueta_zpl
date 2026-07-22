# Task 2: ZPL Generator (Backend)

## Context
Task 2 of 10 — Zebra Label Designer. Task 1 is complete (monorepo + types). You are writing the ZPL generator: a function that takes an array of elements + label dimensions and returns a ZPL string.

## Global Constraints
- TypeScript strict mode
- Project root: `c:/Pedro/projects/etiqueta_zpl`
- Run tests with: `cd backend && npm test -- --testPathPattern=generator`

## Files to Create
- `c:/Pedro/projects/etiqueta_zpl/backend/src/zpl/generator.ts`
- `c:/Pedro/projects/etiqueta_zpl/backend/src/zpl/generator.test.ts`

## Interface to Implement
```typescript
// backend/src/zpl/generator.ts
import { Element, GenerateRequest } from './types';
export function generateZpl(req: GenerateRequest): string;
```

## ZPL Rules (use EXACTLY these formats)
| Type | ZPL Output |
|---|---|
| `text` | `^FO{x},{y}^A{fontName}N,{fontSize},{fontSize}^FD{value}^FS` (default fontName `'0'`, default fontSize `30`) |
| `barcode128` | `^FO{x},{y}^BCN,{height},Y,N,N^FD{value}^FS` |
| `qrcode` | `^FO{x},{y}^BQN,2,{mag}^FDMA,{value}^FS` where `mag = Math.max(1, Math.round(el.width / 40))` |
| `rect` | `^FO{x},{y}^GB{width},{height},8^FS` |
| `image-placeholder` | `^FO{x},{y}^GB{width},{height},3,B,5^FS` |

Wrap output: lines joined with `\n`, starting `^XA`, then `^PW{labelWidth}`, `^LL{labelHeight}`, then elements, then `^XZ`.

## Exact Tests (write these first — TDD)
```typescript
import { generateZpl } from './generator';
import { GenerateRequest } from './types';

const base: GenerateRequest = { labelWidth: 800, labelHeight: 1200, elements: [] };

test('wraps output in ^XA / ^XZ', () => {
  const zpl = generateZpl(base);
  expect(zpl).toMatch(/^\^XA/);
  expect(zpl).toMatch(/\^XZ$/);
});

test('sets label dimensions', () => {
  const zpl = generateZpl(base);
  expect(zpl).toContain('^PW800');
  expect(zpl).toContain('^LL1200');
});

test('generates text element', () => {
  const zpl = generateZpl({
    ...base,
    elements: [{ id: '1', type: 'text', x: 80, y: 80, width: 200, height: 40, value: 'Hello', fontSize: 34, fontName: '0' }],
  });
  expect(zpl).toContain('^FO80,80');
  expect(zpl).toContain('^A0N,34,34');
  expect(zpl).toContain('^FDHello^FS');
});

test('generates barcode128 element', () => {
  const zpl = generateZpl({
    ...base,
    elements: [{ id: '2', type: 'barcode128', x: 100, y: 100, width: 300, height: 100, value: '12345' }],
  });
  expect(zpl).toContain('^FO100,100');
  expect(zpl).toContain('^BCN,100,Y,N,N');
  expect(zpl).toContain('^FD12345^FS');
});

test('generates qrcode element', () => {
  const zpl = generateZpl({
    ...base,
    elements: [{ id: '3', type: 'qrcode', x: 50, y: 50, width: 100, height: 100, value: 'https://example.com' }],
  });
  expect(zpl).toContain('^FO50,50');
  expect(zpl).toContain('^BQN,2,');
  expect(zpl).toContain('^FDMA,https://example.com^FS');
});

test('generates rect element', () => {
  const zpl = generateZpl({
    ...base,
    elements: [{ id: '4', type: 'rect', x: 10, y: 10, width: 200, height: 150 }],
  });
  expect(zpl).toContain('^FO10,10');
  expect(zpl).toContain('^GB200,150,8^FS');
});

test('generates image-placeholder element', () => {
  const zpl = generateZpl({
    ...base,
    elements: [{ id: '5', type: 'image-placeholder', x: 20, y: 20, width: 100, height: 100 }],
  });
  expect(zpl).toContain('^FO20,20');
  expect(zpl).toContain('^GB100,100,3,B,5^FS');
});
```

## Steps
1. Write `generator.test.ts` with the exact tests above
2. Run tests — confirm they FAIL (module not found)
3. Write `generator.ts` implementing `generateZpl`
4. Run tests — confirm all 6 PASS
5. Commit: `git add backend/src/zpl/ && git commit -m "feat: ZPL generator with unit tests"`

## Report File
Write your full report to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-2-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- Files created
- Test run output (command + result)
- Git commit hash
- Any concerns
