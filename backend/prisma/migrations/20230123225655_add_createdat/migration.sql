/*
  Warnings:

  - Added the required column `createdAt` to the `pizza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pizza" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
