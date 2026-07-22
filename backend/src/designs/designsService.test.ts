process.env.NODE_ENV = 'test';

import { initDb, _resetDb } from '../db/database';
import { registerUser } from '../auth/authService';
import {
  createDesign, listDesigns, getDesign, deleteDesign,
  createVersion, listVersions, getVersion,
} from './designsService';

const payload = { zpl: '^XA^XZ', elements: [{ id: '1', type: 'text' }], labelWidth: 800, labelHeight: 1200 };
let userId1: number;
let userId2: number;

beforeEach(async () => {
  _resetDb();
  initDb();
  await registerUser('alice', 'pass123');
  await registerUser('bob', 'pass456');
  const db = (await import('../db/database')).getDb();
  userId1 = (db.prepare('SELECT id FROM users WHERE username = ?').get('alice') as { id: number }).id;
  userId2 = (db.prepare('SELECT id FROM users WHERE username = ?').get('bob') as { id: number }).id;
});

afterAll(() => { _resetDb(); });

test('createDesign returns designId and versionId', () => {
  const result = createDesign(userId1, 'My Label', payload);
  expect(result.designId).toBeGreaterThan(0);
  expect(result.versionId).toBeGreaterThan(0);
});

test('createDesign throws DESIGN_NAME_TAKEN for duplicate name per user', () => {
  createDesign(userId1, 'My Label', payload);
  expect(() => createDesign(userId1, 'My Label', payload)).toThrow('DESIGN_NAME_TAKEN');
});

test('different users can have designs with the same name', () => {
  createDesign(userId1, 'My Label', payload);
  expect(() => createDesign(userId2, 'My Label', payload)).not.toThrow();
});

test('listDesigns returns only the requesting user designs', () => {
  createDesign(userId1, 'Label A', payload);
  createDesign(userId1, 'Label B', payload);
  createDesign(userId2, 'Label C', payload);
  const list = listDesigns(userId1);
  expect(list).toHaveLength(2);
  expect(list.map(d => d.name)).toContain('Label A');
  expect(list.map(d => d.name)).not.toContain('Label C');
});

test('listDesigns includes versionCount', () => {
  const { designId } = createDesign(userId1, 'Label A', payload);
  createVersion(userId1, designId, { ...payload, zpl: '^XA^XZ2' });
  const list = listDesigns(userId1);
  expect(list[0].versionCount).toBe(2);
});

test('getDesign returns summary for owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  const summary = getDesign(userId1, designId);
  expect(summary).toBeDefined();
  expect(summary!.name).toBe('My Label');
});

test('getDesign returns undefined for non-owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  expect(getDesign(userId2, designId)).toBeUndefined();
});

test('deleteDesign returns true for owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  expect(deleteDesign(userId1, designId)).toBe(true);
  expect(listDesigns(userId1)).toHaveLength(0);
});

test('deleteDesign returns false for non-owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  expect(deleteDesign(userId2, designId)).toBe(false);
});

test('createVersion increments version_number', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  const v2 = createVersion(userId1, designId, { ...payload, zpl: '^XA^XZ2' });
  expect(v2.versionNumber).toBe(2);
});

test('createVersion throws DESIGN_NOT_FOUND for non-owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  expect(() => createVersion(userId2, designId, payload)).toThrow('DESIGN_NOT_FOUND');
});

test('listVersions returns ordered versions for owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  createVersion(userId1, designId, payload);
  createVersion(userId1, designId, payload);
  const versions = listVersions(userId1, designId);
  expect(versions).toHaveLength(3);
  expect(versions[0].versionNumber).toBe(1);
  expect(versions[2].versionNumber).toBe(3);
});

test('listVersions returns empty array for non-owner', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  expect(listVersions(userId2, designId)).toHaveLength(0);
});

test('getVersion returns VersionDetail with parsed elements', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  const version = getVersion(userId1, designId, 1);
  expect(version).toBeDefined();
  expect(version!.elements).toEqual(payload.elements);
  expect(version!.zpl).toBe(payload.zpl);
  expect(version!.labelWidth).toBe(800);
});

test('getVersion returns undefined for wrong version number', () => {
  const { designId } = createDesign(userId1, 'My Label', payload);
  expect(getVersion(userId1, designId, 99)).toBeUndefined();
});
