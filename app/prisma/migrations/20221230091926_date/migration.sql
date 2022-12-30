-- CreateTable
CREATE TABLE "Tags" (
    "tagid" SERIAL NOT NULL,
    "tag" VARCHAR(60) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("tagid")
);
