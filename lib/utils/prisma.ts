import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@lib/prisma/client';

export const client = new PrismaClient({
  adapter: new PrismaNeon({
    connectionString:
      process.env.DATABASE_URL ||
      'postgresql://user:password@host:5432/next',
  }),
});
