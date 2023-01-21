import { Injectable } from '@nestjs/common';
import { Pizza, PizzaProps } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/repositories/pizza.repository';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddPizzaRequest extends PizzaProps {}

export interface AddPizzaResponse {
  pizza: Pizza;
}
@Injectable()
export class AddPizzaUseCase {
  constructor(private pizzaRepository: PizzaRepository) {}
  public async execute(req: AddPizzaRequest) {
    const { name, price, ingredients ,img } = req;

    const pizza = new Pizza({
      name,
      price,
      ingredients,
      img,
    });

    await this.pizzaRepository.create(pizza);

    return pizza;
  }
}
