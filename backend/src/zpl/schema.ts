import { z } from 'zod';

/**
 * Zod schema for a single design element, shared by the ZPL and designs
 * routes so both endpoints validate and type elements identically.
 */
export const ElementSchema = z.object({
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

export type ElementInput = z.infer<typeof ElementSchema>;
