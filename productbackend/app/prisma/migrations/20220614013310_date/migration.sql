-- CreateTable
CREATE TABLE "Product" (
    "pid" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "brand" VARCHAR(256) NOT NULL,
    "description" VARCHAR(256) NOT NULL,
    "seller" VARCHAR(256) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("pid")
);
