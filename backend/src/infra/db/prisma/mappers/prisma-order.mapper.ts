import { Order } from '@domain/entities/order';
import { order as RawOrder } from '@prisma/client';

export class PrismaOrderMapper {
  static toPrisma(order: Order) {
    return {
      id: order.id,
      items: {
        connect: order.items.map((pizza) => {
          return {
            id: pizza.id,
          };
        }),
      },
      costumerName: order.costumerName,
      isDelivered: order.isDelivered,
      orderedAt: order.orderedAt,
    };
  }

  static toDomain(raw: RawOrder, items: any[]) {
    return new Order({
      id: raw.id,
      items,
      costumerName: raw.costumerName,
      isDelivered: raw.isDelivered,
      orderedAt: raw.orderedAt,
    });
  }
}
