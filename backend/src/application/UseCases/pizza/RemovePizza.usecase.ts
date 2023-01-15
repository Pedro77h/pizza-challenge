import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/entities/repositories/pizza.repository';
export class RemovePizzas {
  constructor(private pizzaRepository: PizzaRepository) {}

  public async execute(pizzaId: string) {
    const pizza: Pizza = await this.pizzaRepository.findOneOrFail(pizzaId);

    if (!pizza) throw new Error();

    await this.pizzaRepository.remove(pizzaId);
  }
}
