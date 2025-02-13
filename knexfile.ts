import 'dotenv/config'; // Loads environment variables from .env

const config = {
  development: {
    client: 'pg', // Use PostgreSQL as the database client
    connection: {
      host: process.env.DEV_DB_HOST || 'localhost', // Host from environment or default to localhost
      user: process.env.DEV_DB_USER || 'postgres', // Database username
      password: process.env.DEV_DB_PASSWORD || 'pgrajat', // Database password
      database: process.env.DEV_DB_NAME || 'kwickbill', // Database name
      port: Number(process.env.PORT) || 5432, // Port number
    },
    migrations: {
      directory: './migrations', // Directory for migration files
      extension: 'ts', // Use TypeScript for migration files
    },
    seeds: {
      directory: './seeds', // Directory for seed files
    },
  }
};

export default config;
