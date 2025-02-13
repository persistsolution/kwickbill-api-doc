import { Sequelize } from "sequelize";
import "dotenv/config";

<<<<<<< HEAD
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
=======
export const sequelize = new Sequelize("kwickbill_dev", "postgres", "Rd9595454907", {
  host: "database-4.crq6yqcualdr.ap-south-1.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres", // Or 'mysql' | 'mssql' | 'sqlite'
  dialectOptions: {
    ssl: false, // Disable SSL explicitly
  },
  logging: false, // Optional: Disable logging
});
>>>>>>> dd27a0ed3b2c2fc6239c427d36db4e8518499fde
