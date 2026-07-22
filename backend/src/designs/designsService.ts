// @ts-nocheck — TODO(Task 3): replace SQLite prepare() calls with Drizzle queries
import { getDb } from '../db/database';

export interface DesignPayload {
  zpl: string;
  elements: object[];
  labelWidth: number;
  labelHeight: number;
}

export interface DesignSummary {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  versionCount: number;
}

export interface VersionSummary {
  id: number;
  versionNumber: number;
  createdAt: string;
}

export interface VersionDetail {
  id: number;
  versionNumber: number;
  zpl: string;
  elements: object[];
  labelWidth: number;
  labelHeight: number;
  createdAt: string;
}

type DesignRow = { id: number; name: string; created_at: string; updated_at: string; version_count: number };
type VersionRow = { id: number; version_number: number; zpl: string; elements_json: string; label_width: number; label_height: number; created_at: string };

function toDesignSummary(row: DesignRow): DesignSummary {
  return { id: row.id, name: row.name, createdAt: row.created_at, updatedAt: row.updated_at, versionCount: row.version_count };
}

function toVersionDetail(row: VersionRow): VersionDetail {
  return {
    id: row.id,
    versionNumber: row.version_number,
    zpl: row.zpl,
    elements: JSON.parse(row.elements_json) as object[],
    labelWidth: row.label_width,
    labelHeight: row.label_height,
    createdAt: row.created_at,
  };
}

export function createDesign(userId: number, name: string, payload: DesignPayload): { designId: number; versionId: number } {
  const db = getDb();
  const insert = db.prepare('INSERT INTO designs (user_id, name) VALUES (?, ?)');
  let designId: number;
  try {
    designId = Number((insert.run(userId, name)).lastInsertRowid);
  } catch {
    throw new Error('DESIGN_NAME_TAKEN');
  }
  const versionId = insertVersion(designId, payload);
  return { designId, versionId };
}

export function listDesigns(userId: number): DesignSummary[] {
  const rows = getDb().prepare(`
    SELECT d.id, d.name, d.created_at, d.updated_at,
      (SELECT COUNT(*) FROM design_versions WHERE design_id = d.id) AS version_count
    FROM designs d WHERE d.user_id = ? ORDER BY d.updated_at DESC
  `).all(userId) as DesignRow[];
  return rows.map(toDesignSummary);
}

export function getDesign(userId: number, designId: number): DesignSummary | undefined {
  const row = getDb().prepare(`
    SELECT d.id, d.name, d.created_at, d.updated_at,
      (SELECT COUNT(*) FROM design_versions WHERE design_id = d.id) AS version_count
    FROM designs d WHERE d.id = ? AND d.user_id = ?
  `).get(designId, userId) as DesignRow | undefined;
  return row ? toDesignSummary(row) : undefined;
}

export function deleteDesign(userId: number, designId: number): boolean {
  const result = getDb().prepare('DELETE FROM designs WHERE id = ? AND user_id = ?').run(designId, userId);
  return result.changes > 0;
}

function insertVersion(designId: number, payload: DesignPayload): number {
  const db = getDb();
  const maxRow = db.prepare('SELECT COALESCE(MAX(version_number), 0) AS max_vn FROM design_versions WHERE design_id = ?').get(designId) as { max_vn: number };
  const nextVn = maxRow.max_vn + 1;
  const result = db.prepare(
    'INSERT INTO design_versions (design_id, version_number, zpl, elements_json, label_width, label_height) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(designId, nextVn, payload.zpl, JSON.stringify(payload.elements), payload.labelWidth, payload.labelHeight);
  // bump updated_at on parent design
  db.prepare("UPDATE designs SET updated_at = datetime('now') WHERE id = ?").run(designId);
  return Number(result.lastInsertRowid);
}

export function createVersion(userId: number, designId: number, payload: DesignPayload): VersionDetail {
  const design = getDb().prepare('SELECT id FROM designs WHERE id = ? AND user_id = ?').get(designId, userId);
  if (!design) throw new Error('DESIGN_NOT_FOUND');
  const versionId = insertVersion(designId, payload);
  const row = getDb().prepare('SELECT * FROM design_versions WHERE id = ?').get(versionId) as VersionRow;
  return toVersionDetail(row);
}

export function listVersions(userId: number, designId: number): VersionSummary[] {
  const design = getDb().prepare('SELECT id FROM designs WHERE id = ? AND user_id = ?').get(designId, userId);
  if (!design) return [];
  const rows = getDb().prepare(
    'SELECT id, version_number, created_at FROM design_versions WHERE design_id = ? ORDER BY version_number ASC'
  ).all(designId) as { id: number; version_number: number; created_at: string }[];
  return rows.map(r => ({ id: r.id, versionNumber: r.version_number, createdAt: r.created_at }));
}

export function getVersion(userId: number, designId: number, versionNumber: number): VersionDetail | undefined {
  const design = getDb().prepare('SELECT id FROM designs WHERE id = ? AND user_id = ?').get(designId, userId);
  if (!design) return undefined;
  const row = getDb().prepare(
    'SELECT * FROM design_versions WHERE design_id = ? AND version_number = ?'
  ).get(designId, versionNumber) as VersionRow | undefined;
  return row ? toVersionDetail(row) : undefined;
}
