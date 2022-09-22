/*
  Warnings:

  - You are about to drop the column `seller` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(60)`.
  - You are about to alter the column `brand` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(60)`.
  - Added the required column `type` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "seller",
ADD COLUMN     "type" VARCHAR(60) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "brand" SET DATA TYPE VARCHAR(60);
