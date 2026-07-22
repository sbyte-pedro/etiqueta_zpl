// @ts-nocheck — TODO(Task 3): replace SQLite prepare() calls with Drizzle queries
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDb } from '../db/database';

export interface JwtPayload {
  userId: number;
  username: string;
}

const SECRET = process.env.JWT_SECRET ?? 'dev-secret';

export async function registerUser(username: string, password: string): Promise<void> {
  const hash = await bcrypt.hash(password, 10);
  try {
    getDb().prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(username, hash);
  } catch {
    throw new Error('USERNAME_TAKEN');
  }
}

export async function loginUser(username: string, password: string): Promise<string> {
  const row = getDb()
    .prepare('SELECT * FROM users WHERE username = ?')
    .get(username) as { id: number; username: string; password_hash: string } | undefined;
  if (!row) throw new Error('INVALID_CREDENTIALS');
  const match = await bcrypt.compare(password, row.password_hash);
  if (!match) throw new Error('INVALID_CREDENTIALS');
  return jwt.sign(
    { userId: row.id, username: row.username } satisfies JwtPayload,
    SECRET,
    { expiresIn: '7d' }
  );
}
