import { OrderSchema } from './typeorm/schemas/order.schema';
import { OrderRepository } from '@domain/repositories/order.repository';
import { PizzaSchema } from './typeorm/schemas/pizza.schema';
import { PizzaRepository } from '@domain/repositories/pizza.repository';

import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { databaseProviders } from './typeorm/typeorm.providers';

@Module({
  providers: [
    ...databaseProviders,
    {
      provide: PizzaRepository,
      useClass: Repository<PizzaSchema>,
    },
    {
      provide: OrderRepository,
      useClass: Repository<OrderSchema>,
    },
  ],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
