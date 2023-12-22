import { config } from "dotenv";
config();

export const devConfig = {
  dbUrl: process.env.DATABASE_URL,
  accessSecret: process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_REFRESH_SECRET,
};
