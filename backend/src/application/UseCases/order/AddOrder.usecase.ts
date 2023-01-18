import { Order } from './../../../domain/entities/order';
import { OrderRepository } from '@domain/repositories/order.repository';
import { OrderProps } from '@domain/entities/order';

type OrderRequest = OrderProps;

export class AddOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute(req: OrderRequest): Promise<Order> {
    const { costumerName, items } = req;

    const order = new Order({
      costumerName,
      items,
    });

    await this.orderRepository.create(order);

    return order;
  }
}
