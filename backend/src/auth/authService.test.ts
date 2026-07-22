process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';

import { initDb, _resetDb } from '../db/database';
import { registerUser, loginUser } from './authService';

beforeEach(() => {
  _resetDb();
  initDb();
});

afterAll(() => {
  _resetDb();
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
