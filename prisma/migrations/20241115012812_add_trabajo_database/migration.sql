-- AlterTable
ALTER TABLE "Cuidador" ADD COLUMN     "workId" TEXT;

-- CreateTable
CREATE TABLE "Trabajo" (
    "id" TEXT NOT NULL,
    "petId" TEXT,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Trabajo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trabajo" ADD CONSTRAINT "Trabajo_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Mascotas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuidador" ADD CONSTRAINT "Cuidador_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Trabajo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
