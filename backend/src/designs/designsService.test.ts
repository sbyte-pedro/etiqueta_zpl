process.env.DATABASE_URL = process.env.DATABASE_URL ?? 'postgresql://localhost/etiqueta_test';
process.env.JWT_SECRET = 'test-secret';

import { initDb, _resetDb, getDb } from '../db/database';
import { usersTable, designsTable, designVersionsTable } from '../db/schema';
import { registerUser } from '../auth/authService';
import {
  createDesign, listDesigns, getDesign, deleteDesign,
  createVersion, listVersions, getVersion,
} from './designsService';
import { eq } from 'drizzle-orm';

const payload = { zpl: '^XA^XZ', elements: [{ id: '1', type: 'text' }], labelWidth: 800, labelHeight: 1200 };
let userId1: number;
let userId2: number;

beforeAll(async () => {
  await initDb();
});

beforeEach(async () => {
  const db = getDb();
  await db.delete(designVersionsTable);
  await db.delete(designsTable);
  await db.delete(usersTable);
  await registerUser('alice', 'pass123');
  await registerUser('bob', 'pass456');
  const alice = await db.select({ id: usersTable.id }).from(usersTable).where(eq(usersTable.username, 'alice'));
  const bob = await db.select({ id: usersTable.id }).from(usersTable).where(eq(usersTable.username, 'bob'));
  userId1 = alice[0].id;
  userId2 = bob[0].id;
});

afterAll(async () => {
  await _resetDb();
});

test('createDesign returns designId and versionId', async () => {
  const result = await createDesign(userId1, 'My Label', payload);
  expect(result.designId).toBeGreaterThan(0);
  expect(result.versionId).toBeGreaterThan(0);
});

test('createDesign throws DESIGN_NAME_TAKEN for duplicate name per user', async () => {
  await createDesign(userId1, 'My Label', payload);
  await expect(createDesign(userId1, 'My Label', payload)).rejects.toThrow('DESIGN_NAME_TAKEN');
});

test('different users can have designs with the same name', async () => {
  await createDesign(userId1, 'My Label', payload);
  await expect(createDesign(userId2, 'My Label', payload)).resolves.toBeDefined();
});

test('listDesigns returns only the requesting user designs', async () => {
  await createDesign(userId1, 'Label A', payload);
  await createDesign(userId1, 'Label B', payload);
  await createDesign(userId2, 'Label C', payload);
  const list = await listDesigns(userId1);
  expect(list).toHaveLength(2);
  expect(list.map((d) => d.name)).toContain('Label A');
  expect(list.map((d) => d.name)).not.toContain('Label C');
});

test('listDesigns includes versionCount', async () => {
  const { designId } = await createDesign(userId1, 'Label A', payload);
  await createVersion(userId1, designId, { ...payload, zpl: '^XA^XZ2' });
  const list = await listDesigns(userId1);
  expect(list[0].versionCount).toBe(2);
});

test('getDesign returns summary for owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  const summary = await getDesign(userId1, designId);
  expect(summary).toBeDefined();
  expect(summary!.name).toBe('My Label');
});

test('getDesign returns undefined for non-owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  expect(await getDesign(userId2, designId)).toBeUndefined();
});

test('deleteDesign returns true for owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  expect(await deleteDesign(userId1, designId)).toBe(true);
  expect(await listDesigns(userId1)).toHaveLength(0);
});

test('deleteDesign returns false for non-owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  expect(await deleteDesign(userId2, designId)).toBe(false);
});

test('createVersion increments version_number', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  const v2 = await createVersion(userId1, designId, { ...payload, zpl: '^XA^XZ2' });
  expect(v2.versionNumber).toBe(2);
});

test('createVersion throws DESIGN_NOT_FOUND for non-owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  await expect(createVersion(userId2, designId, payload)).rejects.toThrow('DESIGN_NOT_FOUND');
});

test('listVersions returns ordered versions for owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  await createVersion(userId1, designId, payload);
  await createVersion(userId1, designId, payload);
  const versions = await listVersions(userId1, designId);
  expect(versions).toHaveLength(3);
  expect(versions[0].versionNumber).toBe(1);
  expect(versions[2].versionNumber).toBe(3);
});

test('listVersions returns empty array for non-owner', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  expect(await listVersions(userId2, designId)).toHaveLength(0);
});

test('getVersion returns VersionDetail with parsed elements', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  const version = await getVersion(userId1, designId, 1);
  expect(version).toBeDefined();
  expect(version!.elements).toEqual(payload.elements);
  expect(version!.zpl).toBe(payload.zpl);
  expect(version!.labelWidth).toBe(800);
});

test('getVersion returns undefined for wrong version number', async () => {
  const { designId } = await createDesign(userId1, 'My Label', payload);
  expect(await getVersion(userId1, designId, 99)).toBeUndefined();
});
