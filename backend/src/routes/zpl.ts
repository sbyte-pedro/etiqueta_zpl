import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { generateZpl } from '../zpl/generator';
import { parseZpl } from '../zpl/parser';

export const zplRouter = Router();

const ElementSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'barcode128', 'qrcode', 'rect', 'line', 'image-placeholder', 'comment']),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  value: z.string().optional(),
  fontSize: z.number().optional(),
  fontName: z.string().optional(),
  reversed: z.boolean().optional(),
  filled: z.boolean().optional(),
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
  // Convert dots to inches for Labelary (8 dots/mm = 203.2 dpi)
  const wIn = (labelWidth / 203.2).toFixed(2);
  const hIn = (labelHeight / 203.2).toFixed(2);
  const url = `http://api.labelary.com/v1/printers/8dpmm/labels/${wIn}x${hIn}/0/`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'image/png' },
      body: zpl,
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
