import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/app/lib/db/schema";

const conn = postgres(process.env.POSTGRES_URL as string);

export const db = drizzle(conn, { schema });
