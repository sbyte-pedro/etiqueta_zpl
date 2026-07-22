import { pgTable, serial, text, integer, timestamp, unique } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const designsTable = pgTable('designs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (t) => [unique().on(t.userId, t.name)]);

export const designVersionsTable = pgTable('design_versions', {
  id: serial('id').primaryKey(),
  designId: integer('design_id').notNull().references(() => designsTable.id, { onDelete: 'cascade' }),
  versionNumber: integer('version_number').notNull(),
  zpl: text('zpl').notNull(),
  elementsJson: text('elements_json').notNull(),
  labelWidth: integer('label_width').notNull(),
  labelHeight: integer('label_height').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (t) => [unique().on(t.designId, t.versionNumber)]);
