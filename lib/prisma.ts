// lib/prisma.ts or utils/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // Prevents duplicate declarations in Next.js (because of module reloads)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
