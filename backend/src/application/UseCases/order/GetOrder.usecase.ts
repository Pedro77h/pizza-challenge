import { Order } from '@domain/entities/order';
import { OrderRepository } from '@domain/repositories/order.repository';
export class GetOrders {
  constructor(private orderRepository: OrderRepository) {}

  async execute() {
    const orders = await this.orderRepository.findAll();
    
    return {
      orders,
    };
  }
}
