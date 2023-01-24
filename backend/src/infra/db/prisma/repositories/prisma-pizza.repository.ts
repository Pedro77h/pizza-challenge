import { Injectable } from '@nestjs/common';
import { PrismaPizzaMapper } from './../mappers/prisma-pizza..mapper';
import { PrismaService } from '../prisma.service';
import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/repositories/pizza.repository';

@Injectable()
export class PrismaPizzaRepository implements PizzaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(pizza: Pizza): Promise<void> {
    const raw = PrismaPizzaMapper.toPrisma(pizza);

    await this.prismaService.pizza.create({
      data: raw,
    });
  }
  async findAll(): Promise<Pizza[]> {
    const pizzas = await this.prismaService.pizza.findMany();

    const domainPizzas = pizzas.map((pizza) =>
      PrismaPizzaMapper.toDomain(pizza),
    );

    return domainPizzas;
  }
  async findOneOrFail(pizzaId: string): Promise<Pizza> {
    const pizza = await this.prismaService.pizza.findUnique({
      where: {
        id: pizzaId,
      },
    });

    return PrismaPizzaMapper.toDomain(pizza);
  }
  async remove(pizzaId: string): Promise<void> {
    await this.prismaService.pizza.delete({
      where: {
        id: pizzaId,
      },
    });
  }
  async save(pizzaId: string, data: Partial<Pizza>): Promise<void> {
    await this.prismaService.pizza.update({
      where: {
        id: pizzaId,
      },
      data: PrismaPizzaMapper.toPrisma(data),
    });
  }
}
