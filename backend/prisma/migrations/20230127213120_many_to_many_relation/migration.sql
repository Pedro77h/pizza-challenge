-- DropForeignKey
ALTER TABLE "pizza" DROP CONSTRAINT "pizza_orderId_fkey";

-- CreateTable
CREATE TABLE "_ordersTopizza" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ordersTopizza_AB_unique" ON "_ordersTopizza"("A", "B");

-- CreateIndex
CREATE INDEX "_ordersTopizza_B_index" ON "_ordersTopizza"("B");

-- AddForeignKey
ALTER TABLE "_ordersTopizza" ADD CONSTRAINT "_ordersTopizza_A_fkey" FOREIGN KEY ("A") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ordersTopizza" ADD CONSTRAINT "_ordersTopizza_B_fkey" FOREIGN KEY ("B") REFERENCES "pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;
