import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "../config";

const pool = new Pool({
  connectionString: config.dbUrl,
  ssl: true,
});

export const dbClient = drizzle(pool);
