/*
  Warnings:

  - You are about to drop the column `workId` on the `Cuidador` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cuidador" DROP CONSTRAINT "Cuidador_workId_fkey";

-- AlterTable
ALTER TABLE "Cuidador" DROP COLUMN "workId";

-- AlterTable
ALTER TABLE "Trabajo" ADD COLUMN     "cId" TEXT;

-- AddForeignKey
ALTER TABLE "Trabajo" ADD CONSTRAINT "Trabajo_cId_fkey" FOREIGN KEY ("cId") REFERENCES "Cuidador"("id") ON DELETE SET NULL ON UPDATE CASCADE;
