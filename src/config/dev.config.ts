import { config } from "dotenv";
config();

export const devConfig = {
  dbUrl: process.env.DATABASE_URL,
};
