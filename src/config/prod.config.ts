import { config } from "dotenv";
config();

export const prodConfig = {
  dbUrl: process.env.DATABASE_URL,
};
