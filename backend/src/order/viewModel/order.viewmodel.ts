import { Order } from '@domain/entities/order';
export class OrderViewModel {
  static toHTTP(order: Order) {
    return {
      id: order.id,
      items: order.items,
      costumerName: order.costumerName,
      isDelivered: order.isDelivered,
    };
  }
}
