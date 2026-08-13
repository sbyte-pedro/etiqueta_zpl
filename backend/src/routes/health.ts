import { Router } from 'express';
import { sql } from 'drizzle-orm';
import { getDb } from '../db/database';

export const healthRouter = Router();

/**
 * Liveness + readiness check. Pings the database with a trivial query so the
 * endpoint reflects real request-serving capability, not just process uptime.
 * Returns 503 when the DB is unreachable so load balancers can route around it.
 */
healthRouter.get('/', async (_req, res) => {
  try {
    await getDb().execute(sql`SELECT 1`);
    res.json({ ok: true, db: 'up' });
  } catch {
    res.status(503).json({ ok: false, db: 'down' });
  }
});
