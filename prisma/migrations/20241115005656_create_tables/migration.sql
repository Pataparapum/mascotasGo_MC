-- CreateTable
CREATE TABLE "Mascotas" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "raza" TEXT NOT NULL,
    "detalles" TEXT NOT NULL,

    CONSTRAINT "Mascotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuidador" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "estudios" TEXT NOT NULL,
    "experiencias" TEXT NOT NULL,

    CONSTRAINT "Cuidador_pkey" PRIMARY KEY ("id")
);
