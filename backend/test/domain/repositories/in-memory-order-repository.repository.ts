import { OrderNotFound } from './../../../src/application/errors/orderNotFound.error';
import { Order } from '@domain/entities/order';
import { OrderRepository } from '@domain/repositories/order.repository';
export class InMemoryOrderRepository extends OrderRepository {
  public orders: Order[] = [];

  async create(order: Order): Promise<Order | void> {
    this.orders.push(order);

    return order;
  }
  async findAll(): Promise<Order[]> {
    return this.orders;
  }
  async findOneOrFail(orderId: string): Promise<Order> {
    try {
      const order = this.orders.find((order) => order.id === orderId);

      return order;
    } catch (err) {
      throw new OrderNotFound();
    }
  }

  async save(order: Order): Promise<void> {
    const index = this.orders.findIndex((item) => item.id === order.id);

    if (index >= 0) this.orders[index] = order;
  }
}
