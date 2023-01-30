import { Inject, Injectable } from '@nestjs/common';
import { PrismaPizzaMapper } from './../mappers/prisma-pizza..mapper';
import { PizzaNotFound } from '@app/errors/pizzaNotFound.error';
import { PrismaService } from './../prisma.service';
import { PrismaOrderMapper } from './../mappers/prisma-order.mapper';
import { Order } from '@domain/entities/order';
import { OrderRepository } from '@domain/repositories/order.repository';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(order: Order): Promise<void | Order> {
    const raw = PrismaOrderMapper.toPrisma(order);

    await this.prismaService.orders.create({
      data: raw,
    });
  }
  async findAll(): Promise<Order[]> {
    const orders = await this.prismaService.orders.findMany({
      include: {
        items: true,
      },
      orderBy: {
        orderedAt: 'desc',
      },
    });

    const domainOrders = orders.map((order) =>
      PrismaOrderMapper.toDomain(order, order.items),
    );

    return domainOrders;
  }
  async findOneOrFail(orderId: string): Promise<Order> {
    try {
      const order = await this.prismaService.orders.findUnique({
        where: {
          id: orderId,
        },
        include: {
          items: true,
        },
      });

      return PrismaOrderMapper.toDomain(order, order.items);
    } catch (err) {
      throw new PizzaNotFound();
    }
  }
  async save(order: Order): Promise<void> {
    await this.prismaService.orders.update({
      where: {
        id: order.id,
      },
      data: PrismaOrderMapper.toPrisma(order),
    });
  }
}
