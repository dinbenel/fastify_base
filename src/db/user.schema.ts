import { InferInsertModel, InferModel, InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const userTable = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    password: varchar("password", { length: 256 }).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (table) => {
    return {
      idIndex: uniqueIndex("user_email_idx").on(table.email),
    };
  }
);

export type UserInsert = InferInsertModel<typeof userTable>;
export type UserSelect = InferSelectModel<typeof userTable>;
