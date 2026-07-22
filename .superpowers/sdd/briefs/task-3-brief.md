# Task 3: ZPL Parser (Backend)

## Context
Task 3 of 10 — Zebra Label Designer. Tasks 1 & 2 are complete. You are writing the ZPL parser: takes a ZPL string, returns elements + label dimensions. This enables the "Apply to Design" feature.

## Global Constraints
- TypeScript strict mode
- Project root: `c:/Pedro/projects/etiqueta_zpl`
- Run tests with: `cd backend && npm test -- --testPathPattern=parser`

## Files to Create
- `c:/Pedro/projects/etiqueta_zpl/backend/src/zpl/parser.ts`
- `c:/Pedro/projects/etiqueta_zpl/backend/src/zpl/parser.test.ts`

## Interface to Implement
```typescript
// backend/src/zpl/parser.ts
import { ParseResult } from './types';
export function parseZpl(zpl: string): ParseResult;
```

`ParseResult` is already defined in `types.ts`:
```typescript
export interface ParseResult extends LabelDimensions {
  elements: Element[];
  unknownCommands: string[];
}
```

## Parsing Rules
Use a module-level counter for IDs (reset to 0 at start of each `parseZpl` call): `parsed-1`, `parsed-2`, etc.

Parse in this ORDER (important — image-placeholder BEFORE rect to avoid mismatches):
1. `^PW(\d+)` → `labelWidth`
2. `^LL(\d+)` → `labelHeight`
3. Text: `\^FO(\d+),(\d+)\^A(\w)N,(\d+),\d+\^FD([^^]*)\^FS` → `{ type:'text', x, y, width:200, height:fontSize+10, fontName, fontSize, value }`
4. Barcode128: `\^FO(\d+),(\d+)\^BCN,(\d+),Y,N,N\^FD([^^]*)\^FS` → `{ type:'barcode128', x, y, width:300, height, value }`
5. QRCode: `\^FO(\d+),(\d+)\^BQN,\d+,(\d+)\^FDMA,([^^]*)\^FS` → `{ type:'qrcode', x, y, width:mag*40, height:mag*40, value }`
6. Image placeholder: `\^FO(\d+),(\d+)\^GB(\d+),(\d+),3,B,5\^FS` → `{ type:'image-placeholder', x, y, width, height }`
7. Rect: `\^FO(\d+),(\d+)\^GB(\d+),(\d+),8\^FS` → `{ type:'rect', x, y, width, height }`
8. Unknown: any `^CMD` that doesn't match known patterns → push to `unknownCommands`

Track matched strings in a `Set<string>` to avoid double-counting in the unknown collector.

## Exact Tests (write these first — TDD)
```typescript
import { parseZpl } from './parser';
import { generateZpl } from './generator';
import { GenerateRequest } from './types';

test('parses label dimensions', () => {
  const result = parseZpl('^XA\n^PW800\n^LL1200\n^XZ');
  expect(result.labelWidth).toBe(800);
  expect(result.labelHeight).toBe(1200);
});

test('round-trips a text element', () => {
  const req: GenerateRequest = {
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: 'a', type: 'text', x: 80, y: 80, width: 200, height: 40, value: 'Hello', fontSize: 34, fontName: '0' }],
  };
  const zpl = generateZpl(req);
  const result = parseZpl(zpl);
  expect(result.elements).toHaveLength(1);
  const el = result.elements[0];
  expect(el.type).toBe('text');
  expect(el.x).toBe(80);
  expect(el.y).toBe(80);
  expect(el.value).toBe('Hello');
  expect(el.fontSize).toBe(34);
});

test('round-trips a barcode128 element', () => {
  const req: GenerateRequest = {
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: 'b', type: 'barcode128', x: 100, y: 100, width: 300, height: 100, value: '12345' }],
  };
  const result = parseZpl(generateZpl(req));
  expect(result.elements[0].type).toBe('barcode128');
  expect(result.elements[0].value).toBe('12345');
  expect(result.elements[0].height).toBe(100);
});

test('round-trips a qrcode element', () => {
  const req: GenerateRequest = {
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: 'c', type: 'qrcode', x: 50, y: 50, width: 100, height: 100, value: 'https://example.com' }],
  };
  const result = parseZpl(generateZpl(req));
  expect(result.elements[0].type).toBe('qrcode');
  expect(result.elements[0].value).toBe('https://example.com');
});

test('round-trips a rect element', () => {
  const req: GenerateRequest = {
    labelWidth: 800, labelHeight: 1200,
    elements: [{ id: 'd', type: 'rect', x: 10, y: 10, width: 200, height: 150 }],
  };
  const result = parseZpl(generateZpl(req));
  expect(result.elements[0].type).toBe('rect');
  expect(result.elements[0].width).toBe(200);
  expect(result.elements[0].height).toBe(150);
});

test('collects unknown commands without crashing', () => {
  const result = parseZpl('^XA\n^PW800\n^LL1200\n^FN99^FS\n^XZ');
  expect(result.unknownCommands.length).toBeGreaterThan(0);
  expect(result.elements).toHaveLength(0);
});
```

## Steps
1. Write `parser.test.ts` with the exact tests above
2. Run tests — confirm they FAIL (module not found)
3. Write `parser.ts` with the regex-based implementation
4. Run tests — confirm all 5 PASS (the round-trip tests depend on `generator.ts` from Task 2)
5. Commit: `git add backend/src/zpl/parser.ts backend/src/zpl/parser.test.ts && git commit -m "feat: ZPL parser with round-trip unit tests"`

## Report File
Write your full report to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-3-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- Files created
- Test run output (command + result line count/pass count)
- Git commit hash
- Any concerns
