import { pgTable, serial, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  about: varchar("about"),
});

export const experienceTable = pgTable("experience", {
  id: serial("id").primaryKey(),
  startDate: varchar("start_date").notNull(),
  endDate: varchar("end_date").notNull(),
  company: varchar("company").notNull(),
  position: varchar("position").notNull(),
  experience: varchar("experience").notNull(),
});
