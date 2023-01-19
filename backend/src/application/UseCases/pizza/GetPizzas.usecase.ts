import { Injectable } from '@nestjs/common';
import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/repositories/pizza.repository';

interface GetPizzasResponse {
  pizzas: Pizza[];
}
@Injectable()
export class GetPizzas {
  constructor(private pizzaRepository: PizzaRepository) {}

  public async execute() {
    const pizzas = await this.pizzaRepository.findAll();

    return {
      pizzas,
    };
  }
}
