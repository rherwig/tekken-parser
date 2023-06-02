/*
  Warnings:

  - The `damage` column on the `Move` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Move" DROP COLUMN "damage",
ADD COLUMN     "damage" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
