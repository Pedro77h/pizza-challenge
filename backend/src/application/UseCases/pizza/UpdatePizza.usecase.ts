import { PizzaNotFound } from '@app/errors/pizzaNotFound.error';
import { Pizza, PizzaProps } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/entities/repositories/pizza.repository';

export type UpdatePizzaRequest = Partial<Pizza>;

export class UpdatePizza {
  constructor(private pizzaRepository: PizzaRepository) {}

  public async execute(
    pizzaId: string,
    data: UpdatePizzaRequest,
  ): Promise<void> {
    const pizza = this.pizzaRepository.findOneOrFail(pizzaId);

    if (!pizza) {
      throw new PizzaNotFound();
    }

    await this.pizzaRepository.save(pizzaId, data);
  }
}
