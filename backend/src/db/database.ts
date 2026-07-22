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
