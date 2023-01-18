import { Order, OrderProps } from './../entities/order';
export abstract class OrderRepository {
  abstract create(order: Order): Promise<Order |void>;
  abstract findAll(): Promise<Order[]>;
  abstract findOneOrFail(orderId: string): Promise<Order | null>;
}
