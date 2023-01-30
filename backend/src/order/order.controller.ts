import { OrderViewModel } from './viewModel/order.viewmodel';
import { AddOrderDTO } from './dtos/AddOrder.dto';
import { OrderService } from './order.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';


@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('make')
  async create(@Body() body: AddOrderDTO) {
    const { order } = await this.orderService.create(body);

    return {
      order: OrderViewModel.toHTTP(order),
    };
  }

  @Get()
  async findAll() {
    const { orders } = await this.orderService.findAll();

    return {
      orders: orders.map((order) => OrderViewModel.toHTTP(order)),
    };
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const { order } = await this.orderService.find(id);

    return {
      order: OrderViewModel.toHTTP(order),
    };
  }

  @Post(':id/finish')
  async finish(@Param('id') orderId: string) {
    await this.orderService.finish(orderId);
  }
}
