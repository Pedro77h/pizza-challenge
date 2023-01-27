import { PrismaOrderRepository } from './prisma/repositories/prisma-order.repository';
import { OrderRepository } from '@domain/repositories/order.repository';
import { PrismaPizzaRepository } from './prisma/repositories/prisma-pizza.repository';
import { PizzaRepository } from '@domain/repositories/pizza.repository';
import { PrismaService } from './prisma/prisma.service';

import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: PizzaRepository,
      useClass: PrismaPizzaRepository,
    },
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository,
    },
  ],
  exports: [PizzaRepository, OrderRepository],
})
export class DatabaseModule {}
