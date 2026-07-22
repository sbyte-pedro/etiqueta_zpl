import { eq, and, sql, count } from 'drizzle-orm';
import { getDb } from '../db/database';
import { designsTable, designVersionsTable } from '../db/schema';

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

function toIso(d: Date | string): string {
  return typeof d === 'string' ? d : d.toISOString();
}

export async function createDesign(userId: number, name: string, payload: DesignPayload): Promise<{ designId: number; versionId: number }> {
  const db = getDb();
  let designId: number;
  try {
    const rows = await db.insert(designsTable).values({ userId, name }).returning({ id: designsTable.id });
    designId = rows[0].id;
  } catch {
    throw new Error('DESIGN_NAME_TAKEN');
  }
  const versionId = await insertVersion(designId, payload);
  return { designId, versionId };
}

export async function listDesigns(userId: number): Promise<DesignSummary[]> {
  const db = getDb();
  const rows = await db
    .select({
      id: designsTable.id,
      name: designsTable.name,
      createdAt: designsTable.createdAt,
      updatedAt: designsTable.updatedAt,
      versionCount: count(designVersionsTable.id),
    })
    .from(designsTable)
    .leftJoin(designVersionsTable, eq(designVersionsTable.designId, designsTable.id))
    .where(eq(designsTable.userId, userId))
    .groupBy(designsTable.id)
    .orderBy(sql`${designsTable.updatedAt} DESC`);
  return rows.map(r => ({
    id: r.id,
    name: r.name,
    createdAt: toIso(r.createdAt),
    updatedAt: toIso(r.updatedAt),
    versionCount: Number(r.versionCount),
  }));
}

export async function getDesign(userId: number, designId: number): Promise<DesignSummary | undefined> {
  const db = getDb();
  const rows = await db
    .select({
      id: designsTable.id,
      name: designsTable.name,
      createdAt: designsTable.createdAt,
      updatedAt: designsTable.updatedAt,
      versionCount: count(designVersionsTable.id),
    })
    .from(designsTable)
    .leftJoin(designVersionsTable, eq(designVersionsTable.designId, designsTable.id))
    .where(and(eq(designsTable.id, designId), eq(designsTable.userId, userId)))
    .groupBy(designsTable.id);
  const r = rows[0];
  if (!r) return undefined;
  return { id: r.id, name: r.name, createdAt: toIso(r.createdAt), updatedAt: toIso(r.updatedAt), versionCount: Number(r.versionCount) };
}

export async function deleteDesign(userId: number, designId: number): Promise<boolean> {
  const rows = await getDb()
    .delete(designsTable)
    .where(and(eq(designsTable.id, designId), eq(designsTable.userId, userId)))
    .returning({ id: designsTable.id });
  return rows.length > 0;
}

async function insertVersion(designId: number, payload: DesignPayload): Promise<number> {
  const db = getDb();
  const maxRows = await db
    .select({ max: sql<number>`COALESCE(MAX(${designVersionsTable.versionNumber}), 0)` })
    .from(designVersionsTable)
    .where(eq(designVersionsTable.designId, designId));
  const nextVn = Number(maxRows[0].max) + 1;
  const rows = await db.insert(designVersionsTable).values({
    designId,
    versionNumber: nextVn,
    zpl: payload.zpl,
    elementsJson: JSON.stringify(payload.elements),
    labelWidth: payload.labelWidth,
    labelHeight: payload.labelHeight,
  }).returning({ id: designVersionsTable.id });
  await db.update(designsTable).set({ updatedAt: new Date() }).where(eq(designsTable.id, designId));
  return rows[0].id;
}

export async function createVersion(userId: number, designId: number, payload: DesignPayload): Promise<VersionDetail> {
  const design = await getDb().select({ id: designsTable.id }).from(designsTable)
    .where(and(eq(designsTable.id, designId), eq(designsTable.userId, userId)));
  if (!design.length) throw new Error('DESIGN_NOT_FOUND');
  const versionId = await insertVersion(designId, payload);
  const rows = await getDb().select().from(designVersionsTable).where(eq(designVersionsTable.id, versionId));
  return toVersionDetail(rows[0]);
}

export async function listVersions(userId: number, designId: number): Promise<VersionSummary[]> {
  const design = await getDb().select({ id: designsTable.id }).from(designsTable)
    .where(and(eq(designsTable.id, designId), eq(designsTable.userId, userId)));
  if (!design.length) return [];
  const rows = await getDb().select({
    id: designVersionsTable.id,
    versionNumber: designVersionsTable.versionNumber,
    createdAt: designVersionsTable.createdAt,
  }).from(designVersionsTable)
    .where(eq(designVersionsTable.designId, designId))
    .orderBy(designVersionsTable.versionNumber);
  return rows.map(r => ({ id: r.id, versionNumber: r.versionNumber, createdAt: toIso(r.createdAt) }));
}

export async function getVersion(userId: number, designId: number, versionNumber: number): Promise<VersionDetail | undefined> {
  const design = await getDb().select({ id: designsTable.id }).from(designsTable)
    .where(and(eq(designsTable.id, designId), eq(designsTable.userId, userId)));
  if (!design.length) return undefined;
  const rows = await getDb().select().from(designVersionsTable)
    .where(and(eq(designVersionsTable.designId, designId), eq(designVersionsTable.versionNumber, versionNumber)));
  return rows[0] ? toVersionDetail(rows[0]) : undefined;
}

function toVersionDetail(r: typeof designVersionsTable.$inferSelect): VersionDetail {
  return {
    id: r.id,
    versionNumber: r.versionNumber,
    zpl: r.zpl,
    elements: JSON.parse(r.elementsJson) as object[],
    labelWidth: r.labelWidth,
    labelHeight: r.labelHeight,
    createdAt: toIso(r.createdAt),
  };
}

export async function updateVersion(
  userId: number,
  designId: number,
  versionNumber: number,
  payload: DesignPayload
): Promise<VersionDetail | undefined> {
  const db = getDb();
  const design = await db.select({ id: designsTable.id }).from(designsTable)
    .where(and(eq(designsTable.id, designId), eq(designsTable.userId, userId)));
  if (!design.length) return undefined;

  const rows = await db
    .update(designVersionsTable)
    .set({
      zpl: payload.zpl,
      elementsJson: JSON.stringify(payload.elements),
      labelWidth: payload.labelWidth,
      labelHeight: payload.labelHeight,
    })
    .where(and(
      eq(designVersionsTable.designId, designId),
      eq(designVersionsTable.versionNumber, versionNumber)
    ))
    .returning();

  if (!rows.length) return undefined;
  await db.update(designsTable).set({ updatedAt: new Date() }).where(eq(designsTable.id, designId));
  return toVersionDetail(rows[0]);
}
