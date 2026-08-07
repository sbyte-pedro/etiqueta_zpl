import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { generateZpl } from '../zpl/generator';
import { parseZpl } from '../zpl/parser';
import { LABELARY_BASE_URL, LABELARY_TIMEOUT_MS, MAX_ZPL_LENGTH } from '../config';

export const zplRouter = Router();

/** A ZPL string field, capped to prevent oversized relays to Labelary. */
const zplField = z.string().max(MAX_ZPL_LENGTH);

/** Label dimensions in dots, positive and upper-bounded to sane physical sizes. */
const dimension = z.number().positive().max(10_000);

const ElementSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'barcode128', 'qrcode', 'rect', 'line', 'comment']),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  value: z.string().optional(),
  fontSize: z.number().optional(),
  fontName: z.string().optional(),
  fontSource: z.enum(['cf', 'a']).optional(),
  reversed: z.boolean().optional(),
  filled: z.boolean().optional(),
  thickness: z.number().optional(),
  dynamic: z.boolean().optional(),
  variableName: z.string().optional(),
});

const GenerateSchema = z.object({
  labelWidth: dimension,
  labelHeight: dimension,
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
  const schema = z.object({ zpl: zplField });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  const result = parseZpl(parsed.data.zpl);
  res.json(result);
});

/**
 * Relay a label to the Labelary rendering API over HTTPS, with a timeout so a
 * hung upstream connection can't tie up the request indefinitely. Returns the
 * raw response buffer and content type, or null on any error (caller maps to 502).
 */
async function renderViaLabelary(
  zpl: string,
  labelWidth: number,
  labelHeight: number,
  accept: string,
): Promise<{ buffer: Buffer } | { error: 'upstream' | 'network' }> {
  const wIn = (labelWidth / 203.2).toFixed(2);
  const hIn = (labelHeight / 203.2).toFixed(2);
  const url = `${LABELARY_BASE_URL}/${wIn}x${hIn}/0/`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), LABELARY_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': accept },
      body: zpl,
      signal: controller.signal,
    });
    if (!response.ok) {
      return { error: 'upstream' };
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    return { buffer };
  } catch {
    return { error: 'network' };
  } finally {
    clearTimeout(timeout);
  }
}

zplRouter.post('/preview', async (req: Request, res: Response) => {
  const schema = z.object({
    zpl: zplField,
    labelWidth: dimension,
    labelHeight: dimension,
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  const { zpl, labelWidth, labelHeight } = parsed.data;
  const result = await renderViaLabelary(zpl, labelWidth, labelHeight, 'image/png');
  if ('error' in result) {
    res.status(502).json({
      error: result.error === 'upstream' ? 'Labelary API error' : 'Could not reach Labelary API',
    });
    return;
  }
  res.set('Content-Type', 'image/png');
  res.send(result.buffer);
});

const EXPORT_FORMATS = {
  png:  { accept: 'image/png',        contentType: 'image/png',        ext: 'png'  },
  pdf:  { accept: 'application/pdf',  contentType: 'application/pdf',  ext: 'pdf'  },
  epl:  { accept: 'application/epl',  contentType: 'application/epl',  ext: 'epl'  },
  zpl:  { accept: 'application/zpl',  contentType: 'application/zpl',  ext: 'zpl'  },
} as const;

zplRouter.post('/export', async (req: Request, res: Response) => {
  const schema = z.object({
    zpl: zplField,
    labelWidth: dimension,
    labelHeight: dimension,
    format: z.enum(['png', 'pdf', 'epl', 'zpl']),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  const { zpl, labelWidth, labelHeight, format } = parsed.data;
  const { accept, contentType, ext } = EXPORT_FORMATS[format];
  const result = await renderViaLabelary(zpl, labelWidth, labelHeight, accept);
  if ('error' in result) {
    res.status(502).json({
      error: result.error === 'upstream' ? 'Labelary API error' : 'Could not reach Labelary API',
    });
    return;
  }
  res.set('Content-Type', contentType);
  res.set('Content-Disposition', `attachment; filename="label.${ext}"`);
  res.send(result.buffer);
});
