import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("kwickbill_stage", "postgres", "Rd9595454907", {
  host: "database-4.crq6yqcualdr.ap-south-1.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres", // Or 'mysql' | 'mssql' | 'sqlite'
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Change as per your requirements
    },
  },
});
