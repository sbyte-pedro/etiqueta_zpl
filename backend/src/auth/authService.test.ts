process.env.DATABASE_URL = process.env.DATABASE_URL ?? 'postgresql://localhost/etiqueta_test';
process.env.JWT_SECRET = 'test-secret';

import { initDb, _resetDb, getDb } from '../db/database';
import { usersTable } from '../db/schema';
import { designsTable } from '../db/schema';
import { designVersionsTable } from '../db/schema';
import { registerUser, loginUser } from './authService';

beforeAll(async () => {
  await initDb();
});

beforeEach(async () => {
  await _resetDb();
  await initDb();
  const db = getDb();
  await db.delete(designVersionsTable);
  await db.delete(designsTable);
  await db.delete(usersTable);
});

afterAll(async () => {
  await _resetDb();
});

test('registers a new user without error', async () => {
  await expect(registerUser('alice', 'password123')).resolves.toBeUndefined();
});

test('throws USERNAME_TAKEN when registering duplicate', async () => {
  await registerUser('alice', 'password123');
  await expect(registerUser('alice', 'other')).rejects.toThrow('USERNAME_TAKEN');
});

test('login returns a JWT string after registration', async () => {
  await registerUser('bob', 'secret456');
  const token = await loginUser('bob', 'secret456');
  expect(typeof token).toBe('string');
  expect(token.split('.')).toHaveLength(3);
});

test('login throws INVALID_CREDENTIALS for unknown user', async () => {
  await expect(loginUser('nobody', 'pass')).rejects.toThrow('INVALID_CREDENTIALS');
});

test('login throws INVALID_CREDENTIALS for wrong password', async () => {
  await registerUser('carol', 'rightpass');
  await expect(loginUser('carol', 'wrongpass')).rejects.toThrow('INVALID_CREDENTIALS');
});
