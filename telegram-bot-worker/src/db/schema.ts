import { int, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const rotaTable = sqliteTable('rota', {
	id: int().primaryKey({ autoIncrement: true }),

	telegramChatId: int('telegram_chat_id').notNull().unique(),

	// 0 -> OH
	// 1-3 -> Rota 1-3
	rota: int().notNull(),
});
