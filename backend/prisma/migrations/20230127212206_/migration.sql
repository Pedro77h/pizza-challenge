/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pizza" DROP CONSTRAINT "pizza_orderId_fkey";

-- DropTable
DROP TABLE "order";

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "costumerName" TEXT NOT NULL,
    "isDelivered" INTEGER NOT NULL,
    "orderedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "orders_id_idx" ON "orders"("id");

-- AddForeignKey
ALTER TABLE "pizza" ADD CONSTRAINT "pizza_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
