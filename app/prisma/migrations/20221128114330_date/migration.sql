/*
  Warnings:

  - Added the required column `username` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "username" VARCHAR(60) NOT NULL;
