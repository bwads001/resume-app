"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { experienceTable } from "./db/schema";

import { db } from "@/app/lib/db";

const experienceSchema = z.object({
  id: z.string(),
  position: z.string(),
  company: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  experience: z.string(),
});

const CreateExperience = experienceSchema.omit({ id: true });
/* const UpdateExperience = experienceSchema.omit({ id: true }); */

export type State = {
  errors?: {
    position?: string[];
    company?: string[];
    startDate?: string[];
    endDate?: string[];
    experience?: string[];
  };
  message?: string | null;
};

export async function createExperience(previousState: any, formData: FormData) {
  const validatedFields = CreateExperience.safeParse({
    position: formData.get("position"),
    company: formData.get("company"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    experience: formData.get("experience"),
  });

  if (!validatedFields.success) {
    return {
      ...previousState,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Experience.",
    };
  }

  const { position, company, startDate, endDate, experience } =
    validatedFields.data;

  try {
    await db.insert(experienceTable).values({
      position: position,
      company: company,
      startDate: startDate,
      endDate: endDate,
      experience: experience,
    });
  } catch (error) {
    return "Database Error: Failed to Create Experience.";
  }
  revalidatePath("/admin");
}

export async function deleteExperience(previousState: any, formData: FormData) {
  try {
    await db
      .delete(experienceTable)
      .where(eq(experienceTable.id, Number(formData.get("id"))));
  } catch (error) {
    return "Database Error: Failed to Delete Experience.";
  }
  revalidatePath("/admin");
}
