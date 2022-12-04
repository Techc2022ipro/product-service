-- CreateTable
CREATE TABLE "Comment" (
    "cid" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "pid" INTEGER NOT NULL,
    "comment" VARCHAR(60) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("cid")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Product"("pid") ON DELETE RESTRICT ON UPDATE CASCADE;
