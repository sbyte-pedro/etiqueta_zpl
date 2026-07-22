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
