import { PrismaClient } from "@/lib/generated/prisma"; // ✅ Or relative path

export const db= globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production"){
     globalThis.prisma = db;  
}