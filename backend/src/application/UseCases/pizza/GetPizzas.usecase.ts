import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/entities/repositories/pizza.repository';

interface GetPizzasResponse {
  pizzas: Pizza[];
}

export class GetPizzas {
  constructor(private pizzaRepository: PizzaRepository) {}

  public async execute() {
    const pizzas = await this.pizzaRepository.findAll();

    return {
      pizzas,
    };
  }
}
