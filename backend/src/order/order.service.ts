import { AddPizzaDTO } from './../pizza/dto/AddPizza.dto';
import { GetOrders } from '@app/UseCases/order/GetOrder.usecase';
import { FinishOrder } from './../application/UseCases/order/FinishOrder.usecase';
import { FindOrder } from './../application/UseCases/order/FindOrder.usecase';
import { AddOrder } from './../application/UseCases/order/AddOrder.usecase';
import { Injectable } from '@nestjs/common';
import { AddOrderDTO } from './dtos/AddOrder.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly addOrder: AddOrder,
    private readonly findOrder: FindOrder,
    private readonly finishOrder: FinishOrder,
    private readonly getOrder: GetOrders,
  ) {}

  async create(body: AddOrderDTO) {
    const { order } = await this.addOrder.execute(body);

    return {
      order,
    };
  }

  async findAll() {
    const { orders } = await this.getOrder.execute();

    return {
      orders,
    };
  }

  async find(orderId: string) {
    const { order } = await this.findOrder.execute(orderId);

    return {
      order,
    };
  }

  async finish(orderId: string) {
    await this.finishOrder.execute(orderId);
  }
}
