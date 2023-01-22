import { PizzaSchema } from './../schemas/pizza.schema';
import { Repository } from 'typeorm';
import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/repositories/pizza.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzaTypeOrmRepository implements PizzaRepository {
  constructor(
    @InjectRepository(PizzaSchema)
    private ormRepo: Repository<PizzaSchema>
  ) {}

  async create(pizza: Pizza): Promise<void> {
    this.ormRepo.create(pizza);
  }
  findAll(): Promise<Pizza[]> {
    throw new Error('Method not implemented.');
  }
  findOneOrFail(pizzaId: string): Promise<Pizza> {
    throw new Error('Method not implementekad.');
  }
  remove(pizzaId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(pizzaId: string, data: Partial<Pizza>): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
