/*
  Warnings:

  - You are about to drop the column `receiverAccountId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `receiverProduct` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderCreditId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderDepositId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "receiverAccountId",
ADD COLUMN     "receiverProduct" INTEGER NOT NULL,
ADD COLUMN     "senderCreditId" INTEGER NOT NULL,
ADD COLUMN     "senderDepositId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_senderCreditId_fkey" FOREIGN KEY ("senderCreditId") REFERENCES "Credit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_senderDepositId_fkey" FOREIGN KEY ("senderDepositId") REFERENCES "Deposit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
