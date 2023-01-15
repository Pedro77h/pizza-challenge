import { Pizza, PizzaProps } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/entities/repositories/pizza.repository';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddPizzaRequest extends PizzaProps {}

interface AddPizzaResponse {
  pizza: Pizza;
}

export class AddPizzaUseCase {
  constructor(private pizzaRepository: PizzaRepository) {}

  public async execute(req: AddPizzaRequest): Promise<AddPizzaResponse> {
    const { name, price, ingredients } = req;

    const pizza = new Pizza({
      name,
      price,
      ingredients,
    });

    await this.pizzaRepository.create(pizza);

    return {
      pizza,
    };
  }
}
