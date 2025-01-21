import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const rooms = sqliteTable('rooms', {
	id: text().primaryKey(),
});

export const players = sqliteTable('players', {
	id: text().primaryKey(),
	name: text().notNull(),
	roomId: text()
		.notNull()
		.references(() => rooms.id),
});
