/*
  Warnings:

  - You are about to drop the column `encodedPassword` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "encodedPassword",
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "Admin";
