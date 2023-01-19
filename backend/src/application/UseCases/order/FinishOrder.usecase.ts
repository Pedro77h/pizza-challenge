import { Injectable } from '@nestjs/common';
import { OrderRepository } from '@domain/repositories/order.repository';

@Injectable()
export class FinishOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute(orderId: string) {
    const order = await this.orderRepository.findOneOrFail(orderId);

    order.deliver();
    await this.orderRepository.save(order);

    return {
      order,
    };
  }
}
