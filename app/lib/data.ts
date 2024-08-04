"use server";
import { like } from "drizzle-orm";

import { usersTable } from "./db/schema";

import { db } from "@/app/lib/db";

export async function userInfo(username: string) {
  try {
    const user = await db
      .select()
      .from(usersTable)
      .where(like(usersTable.name, username));

    return user[0];
  } catch (error) {
    throw new Error("Failed to fetch user info.");
  }
}

export async function experienceList() {
  try {
    const experiences = await db.query.experienceTable.findMany();

    return experiences;
  } catch (error) {
    throw new Error("Failed to fetch experience list.");
  }
}
