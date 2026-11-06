import "server-only";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

/** Call only in trusted server code. Mock pages never call this function. */
export function getDb(): PrismaClient {
  if (!process.env.DATABASE_URL) {
    throw new Error("Database is not configured. Qubio is currently a mock preview.");
  }
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ log: ["error"] });
  }
  return globalForPrisma.prisma;
}
