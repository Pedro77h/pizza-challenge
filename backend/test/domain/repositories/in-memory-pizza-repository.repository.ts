import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/entities/repositories/pizza.repository';

export class InMemoryPizzaRepository implements PizzaRepository {
  
  public pizzas = []
  
  async create(pizza: Pizza): Promise<void> {
    this.pizzas.push(pizza)
  }
  async findAll(): Promise<Pizza[]> {
    return this.pizzas
  }
  async remove(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async save(): Promise<Pizza> {
    throw new Error('Method not implemented.');
  }
}
