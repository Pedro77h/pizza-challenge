import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/entities/repositories/pizza.repository';

export class InMemoryPizzaRepository implements PizzaRepository {
  public pizzas: Pizza[] = [];

  async create(pizza: Pizza): Promise<void> {
    this.pizzas.push(pizza);
  }
  async findAll(): Promise<Pizza[]> {
    return this.pizzas;
  }
  async findOneOrFail(pizzaId: string): Promise<Pizza | null> {
    return this.pizzas.find((pizza) => pizza.id === pizzaId);
  }

  async remove(pizzaId: string): Promise<void> {
    const restPizzas = this.pizzas.filter(pizza => pizza.id !== pizzaId)
    
    this.pizzas = restPizzas

  }
  async save(): Promise<Pizza> {
    throw new Error('Method not implemented.');
  }
}
