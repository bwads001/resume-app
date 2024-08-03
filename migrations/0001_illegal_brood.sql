CREATE TABLE IF NOT EXISTS "experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"start_date" varchar NOT NULL,
	"end_date" varchar NOT NULL,
	"company" varchar NOT NULL,
	"position" varchar NOT NULL,
	"experience" varchar NOT NULL
);
