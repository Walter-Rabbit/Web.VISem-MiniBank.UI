/*
  Warnings:

  - You are about to drop the column `receiverProduct` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `senderAccountId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `senderCreditId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `senderDepositId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `receiverProductId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderProductId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_senderAccountId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_senderCreditId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_senderDepositId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "receiverProduct",
DROP COLUMN "senderAccountId",
DROP COLUMN "senderCreditId",
DROP COLUMN "senderDepositId",
ADD COLUMN     "receiverProductId" INTEGER NOT NULL,
ADD COLUMN     "senderProductId" INTEGER NOT NULL;
