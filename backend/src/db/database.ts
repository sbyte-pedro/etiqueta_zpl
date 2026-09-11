import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

export type DrizzleDb = NodePgDatabase<typeof schema>;

let pool: Pool | null = null;
let db: DrizzleDb | null = null;

export function getDb(): DrizzleDb {
  if (!db) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle(pool, { schema });
  }
  return db;
}

export async function initDb(): Promise<void> {
  const { runMigrations } = await import('./migrate');
  await runMigrations();
  getDb(); // initialize pool
}

/** Reset for tests only — closes pool and nulls singletons so next getDb() is fresh */
export async function _resetDb(): Promise<void> {
  if (pool) { await pool.end(); pool = null; db = null; }
}

/**
 * True if the error is a Postgres unique_violation (code 23505). Drizzle wraps
 * driver errors in a DrizzleQueryError, so the pg code lives on `.cause` — walk
 * the cause chain to find it.
 */
export function isUniqueViolation(e: unknown): boolean {
  let cur: unknown = e;
  while (cur) {
    if ((cur as { code?: string }).code === '23505') return true;
    cur = (cur as { cause?: unknown }).cause;
  }
  return false;
}
