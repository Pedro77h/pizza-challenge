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
  ],
  exports: [PizzaRepository],
})
export class DatabaseModule {}
