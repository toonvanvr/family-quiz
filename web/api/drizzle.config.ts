import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/data/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.APP_DB_URL,
  },
});
