import { Router, Request, Response } from 'express';
import { z } from 'zod';
import {
  createDesign, listDesigns, getDesign, deleteDesign,
  createVersion, listVersions, getVersion,
} from '../designs/designsService';

export const designsRouter = Router();

const VersionPayloadSchema = z.object({
  zpl: z.string().min(1),
  elements: z.array(z.record(z.unknown())),
  labelWidth: z.number().positive(),
  labelHeight: z.number().positive(),
});

const CreateDesignSchema = VersionPayloadSchema.extend({
  name: z.string().min(1).max(100),
});

designsRouter.post('/', async (req: Request, res: Response) => {
  const parsed = CreateDesignSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: parsed.error.flatten() }); return; }
  const userId = req.user!.userId;
  try {
    const { name, ...payload } = parsed.data;
    const result = await createDesign(userId, name, payload);
    res.status(201).json(result);
  } catch (e) {
    if (e instanceof Error && e.message === 'DESIGN_NAME_TAKEN') {
      res.status(409).json({ error: 'Design name already taken' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

designsRouter.get('/', async (req: Request, res: Response) => {
  res.json(await listDesigns(req.user!.userId));
});

designsRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const design = await getDesign(req.user!.userId, id);
  if (!design) { res.status(404).json({ error: 'Design not found' }); return; }
  res.json(design);
});

designsRouter.delete('/:id', async (req: Request, res: Response) => {
  const deleted = await deleteDesign(req.user!.userId, Number(req.params.id));
  if (!deleted) { res.status(404).json({ error: 'Design not found' }); return; }
  res.status(204).end();
});

designsRouter.post('/:id/versions', async (req: Request, res: Response) => {
  const parsed = VersionPayloadSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: parsed.error.flatten() }); return; }
  try {
    const version = await createVersion(req.user!.userId, Number(req.params.id), parsed.data);
    res.status(201).json(version);
  } catch (e) {
    if (e instanceof Error && e.message === 'DESIGN_NOT_FOUND') {
      res.status(404).json({ error: 'Design not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

designsRouter.get('/:id/versions', async (req: Request, res: Response) => {
  const versions = await listVersions(req.user!.userId, Number(req.params.id));
  res.json(versions);
});

designsRouter.get('/:id/versions/:vn', async (req: Request, res: Response) => {
  const version = await getVersion(req.user!.userId, Number(req.params.id), Number(req.params.vn));
  if (!version) { res.status(404).json({ error: 'Version not found' }); return; }
  res.json(version);
});
