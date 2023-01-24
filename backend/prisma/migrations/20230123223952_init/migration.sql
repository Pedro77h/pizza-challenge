-- CreateTable
CREATE TABLE "pizza" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "ingredients" TEXT[],
    "img" TEXT NOT NULL,
    "orderId" TEXT,

    CONSTRAINT "pizza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "costumerName" TEXT NOT NULL,
    "isDelivered" INTEGER NOT NULL,
    "orderedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pizza_id_idx" ON "pizza"("id");

-- CreateIndex
CREATE INDEX "order_id_idx" ON "order"("id");

-- AddForeignKey
ALTER TABLE "pizza" ADD CONSTRAINT "pizza_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
