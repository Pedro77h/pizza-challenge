import { Pizza, PizzaProps } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/repositories/pizza.repository';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddPizzaRequest extends PizzaProps {}

interface AddPizzaResponse {
  pizza: Pizza;
}

export class AddPizzaUseCase {
  constructor(private pizzaRepository: PizzaRepository) {}
a
  public async execute(req: AddPizzaRequest): Promise<AddPizzaResponse> {
    const { name, price, ingredients } = req;

    const pizza = new Pizza({
      name,
      price,
      ingredients,
      img: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg',
    });

    await this.pizzaRepository.create(pizza);

    return {
      pizza,
    };
  }r
}
