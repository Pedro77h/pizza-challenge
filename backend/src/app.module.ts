import { PizzaController } from './pizza/pizza.controller';
import { DatabaseModule } from './infra/db/database.module';
import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PizzaModule, DatabaseModule, OrderModule],
  controllers: [PizzaController, OrderController],
  providers: [],
})
export class AppModule {}
