import { parseZpl } from './parser';
import { generateZpl } from './generator';
import { GenerateRequest } from './types';

// ── Round-trip tests (generator → parser) ────────────────────────────────────

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
  const result = parseZpl('^XA\n^PW800\n^LL1200\n^ZZ99^FS\n^XZ');
  expect(result.unknownCommands.length).toBeGreaterThan(0);
  expect(result.elements).toHaveLength(0);
});

// ── New parser capabilities ───────────────────────────────────────────────────

test('parses ^CF default font then plain ^FO^FD^FS text', () => {
  const zpl = '^XA\n^PW800\n^LL600\n^CF0,60\n^FO50,50^FDHello World^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements).toHaveLength(1);
  const el = result.elements[0];
  expect(el.type).toBe('text');
  expect(el.value).toBe('Hello World');
  expect(el.fontSize).toBe(60);
  expect(el.x).toBe(50);
  expect(el.y).toBe(50);
});

test('field ^A font overrides ^CF default', () => {
  const zpl = '^XA\n^CF0,30\n^FO10,10^A0N,80,80^FDOverride^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements[0].fontSize).toBe(80);
});

test('parses ^BC barcode with no parameters (uses ^BY height)', () => {
  const zpl = '^XA\n^BY5,2,270\n^FO100,550^BC^FD12345678^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements).toHaveLength(1);
  expect(result.elements[0].type).toBe('barcode128');
  expect(result.elements[0].value).toBe('12345678');
  expect(result.elements[0].height).toBe(270);
});

test('parses ^GB as line when one dimension equals thickness', () => {
  // ^GB700,3,3 — height == thickness → line
  const zpl = '^XA\n^FO50,250^GB700,3,3^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements[0].type).toBe('line');
  expect(result.elements[0].width).toBe(700);
});

test('parses ^GB as rect when thickness is small relative to size', () => {
  // ^GB150,150,3 — thickness < min(w,h) → rect border
  const zpl = '^XA\n^FO600,300^GB150,150,3^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements[0].type).toBe('rect');
});

test('parses ^GB as solid rect when thickness >= min dimension', () => {
  // ^GB100,100,100 — thickness == min(w,h) → filled rect
  const zpl = '^XA\n^FO50,50^GB100,100,100^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements[0].type).toBe('rect');
});

test('parses ^FR as reversed on a text element', () => {
  const zpl = '^XA\n^CF0,30\n^FO50,50^FR^FDReversed^FS\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements[0].reversed).toBe(true);
});

test('ignores ^FX comment lines', () => {
  const zpl = '^XA\n^PW400\n^LL400\n^FX This is a comment\n^XZ';
  const result = parseZpl(zpl);
  expect(result.elements).toHaveLength(0);
  expect(result.labelWidth).toBe(400);
});

test('parses the full labelary sample label', () => {
  const zpl = `^XA
^FX Top section.
^CF0,60
^FO50,50^GB100,100,100^FS
^FO75,75^FR^GB100,100,100^FS
^FO93,93^GB40,40^FS
^FO220,50^FDIntershipping, Inc.^FS
^CF0,30
^FO220,115^FD1000 Shipping Lane^FS
^FO220,155^FDShelbyville TN 38102^FS
^FO220,195^FDUnited States (USA)^FS
^FO50,250^GB700,3,3^FS
^FX Second section.
^FO50,300^FDJohn Doe^FS
^FO50,340^FD100 Main Street^FS
^FO50,380^FDSpringfield TN 39021^FS
^FO50,420^FDUnited States (USA)^FS
^CFA,15
^FO600,300^GB150,150,3^FS
^FO638,340^FDPermit^FS
^FO638,390^FD123456^FS
^FO50,500^GB700,3,3^FS
^FX Third section.
^BY5,2,270
^FO100,550^BC^FD12345678^FS
^FX Fourth section.
^FO50,900^GB700,250,3^FS
^FO400,900^GB3,250,3^FS
^CF0,40
^FO100,960^FDCtr. X34B-1^FS
^FO100,1010^FDREF1 F00B47^FS
^FO100,1060^FDREF2 BL4H8^FS
^CF0,190
^FO470,955^FDCA^FS
^XZ`;
  const result = parseZpl(zpl);
  // Should produce text, rect, line, and barcode elements — not zero
  expect(result.elements.length).toBeGreaterThan(5);
  const types = result.elements.map(e => e.type);
  expect(types).toContain('text');
  expect(types).toContain('barcode128');
  // At least one line (the separator rules)
  expect(types).toContain('line');
});
