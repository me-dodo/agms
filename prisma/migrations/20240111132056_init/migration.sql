-- CreateTable
CREATE TABLE "dataagms" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dataagms_pkey" PRIMARY KEY ("id")
);
