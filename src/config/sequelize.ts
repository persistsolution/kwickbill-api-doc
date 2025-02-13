import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DEV_DB_NAME || "kwickbill",
  process.env.DEV_DB_USER || "postgres",
  process.env.DEV_DB_PASSWORD || "pgrajat",
  {
    host: process.env.DEV_DB_HOST || "localhost",
    port: Number(process.env.DEV_DB_PORT) || 5432, // Convert port to number
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL === "true" ? { require: true, rejectUnauthorized: false } : false,
    },
    logging: process.env.DB_LOGGING === "true", // Enable logging if set to "true"
  }
);
