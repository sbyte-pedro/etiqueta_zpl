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
