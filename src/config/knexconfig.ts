import { knex } from "knex";
import 'dotenv/config'; 

export const db = knex({
  client: "pg",
  connection: {
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
  },
  migrations: {
    directory: "./migrations", // Directory for migration files
  },
  seeds: {
    directory: "./seeds", // Directory for seed files
  }, 
});
