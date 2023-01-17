import { UpdatePizzaRequest } from '@app/UseCases/pizza/UpdatePizza.usecase';
import { PizzaNotFound } from './../../../src/application/errors/pizzaNotFound.error';
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
  async findOneOrFail(pizzaId: string): Promise<Pizza> {
    try {
      const pizza = this.pizzas.find((pizza) => pizza.id === pizzaId);

      return pizza;
    } catch (err) {
      throw new PizzaNotFound();
    }
  }

  async remove(pizzaId: string): Promise<void> {
    const index = this.pizzas.findIndex((pizza) => pizza.id == pizzaId);

    this.pizzas.splice(index, 2);
  }
  async save(pizzaId: string, data: Pizza): Promise<void> {
    const index = this.pizzas.findIndex((pizza) => pizza.id === pizzaId);

    if (index >= 0) this.pizzas[index] = data;
  }
}
