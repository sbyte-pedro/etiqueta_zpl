import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { eq } from 'drizzle-orm';
import { getDb } from '../db/database';
import { usersTable } from '../db/schema';

export interface JwtPayload {
  userId: number;
  username: string;
}

const SECRET = process.env.JWT_SECRET ?? 'dev-secret';

export async function registerUser(username: string, password: string): Promise<void> {
  const hash = await bcrypt.hash(password, 10);
  try {
    await getDb().insert(usersTable).values({ username, passwordHash: hash });
  } catch {
    throw new Error('USERNAME_TAKEN');
  }
}

export async function loginUser(username: string, password: string): Promise<string> {
  const rows = await getDb().select().from(usersTable).where(eq(usersTable.username, username));
  const row = rows[0];
  if (!row) throw new Error('INVALID_CREDENTIALS');
  const match = await bcrypt.compare(password, row.passwordHash);
  if (!match) throw new Error('INVALID_CREDENTIALS');
  return jwt.sign(
    { userId: row.id, username: row.username } satisfies JwtPayload,
    SECRET,
    { expiresIn: '7d' }
  );
}
