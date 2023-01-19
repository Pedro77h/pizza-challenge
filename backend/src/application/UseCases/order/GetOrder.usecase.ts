import { Injectable } from '@nestjs/common';
import { Order } from '@domain/entities/order';
import { OrderRepository } from '@domain/repositories/order.repository';

@Injectable()
export class GetOrders {
  constructor(private orderRepository: OrderRepository) {}

  async execute() {
    const orders = await this.orderRepository.findAll();
    
    return {
      orders,
    };
  }
}
