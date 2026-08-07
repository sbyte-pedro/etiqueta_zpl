import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { eq } from 'drizzle-orm';
import { getDb } from '../db/database';
import { usersTable } from '../db/schema';
import { JWT_SECRET, JWT_ALGORITHM, JWT_EXPIRES_IN } from '../config';

export interface JwtPayload {
  userId: number;
  username: string;
}

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
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN, algorithm: JWT_ALGORITHM }
  );
}
