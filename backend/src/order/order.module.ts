import { DatabaseModule } from './../infra/db/database.module';
import { GetOrders } from '@app/UseCases/order/GetOrder.usecase';
import { FinishOrder } from './../application/UseCases/order/FinishOrder.usecase';
import { FindOrder } from './../application/UseCases/order/FindOrder.usecase';
import { AddOrder } from './../application/UseCases/order/AddOrder.usecase';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [DatabaseModule],
  providers: [OrderService, AddOrder, FindOrder, FinishOrder, GetOrders],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
