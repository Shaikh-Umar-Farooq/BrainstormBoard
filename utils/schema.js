import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Ideas =pgTable('ideas', { 
    id: serial('id').primaryKey(),
    content:varchar('content').notNull(),
    username:varchar('username').notNull(),
    vote:integer('vote').default(0),
    created_at:varchar('created_at').notNull()
});
