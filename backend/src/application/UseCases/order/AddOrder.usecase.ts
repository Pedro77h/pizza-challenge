import { Injectable } from '@nestjs/common';
import { Order } from './../../../domain/entities/order';
import { OrderRepository } from '@domain/repositories/order.repository';
import { OrderProps } from '@domain/entities/order';

type OrderRequest = OrderProps;

type OrderResponse = { order: OrderProps };

@Injectable()
export class AddOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute(req: OrderRequest): Promise<OrderResponse> {
    const { costumerName, items } = req;

    const order = new Order({
      costumerName,
      items,
    });

    await this.orderRepository.create(order);

    return { order };
  }
}
