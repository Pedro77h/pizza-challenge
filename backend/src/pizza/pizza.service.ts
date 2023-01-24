import { Pizza } from '@domain/entities/pizza';
import { UpdatePizza } from './../application/UseCases/pizza/UpdatePizza.usecase';
import { RemovePizzas } from './../application/UseCases/pizza/RemovePizza.usecase';
import { AddPizzaDTO } from './dto/AddPizza.dto';
import {
  AddPizzaResponse,
  AddPizzaUseCase,
} from './../application/UseCases/pizza/AddPizza.usecase';
import { Injectable } from '@nestjs/common';
import { GetPizzas } from '@app/UseCases/pizza/GetPizzas.usecase';

@Injectable()
export class PizzaService {
  constructor(
    private addPizzaUseCase: AddPizzaUseCase,
    private getPizzasUseCase: GetPizzas,
    private removePizzasUseCase: RemovePizzas,
    private updatePizzaUseCase: UpdatePizza,
  ) {}

  async addPizza(body: AddPizzaDTO) {
    const pizza = await this.addPizzaUseCase.execute(body);

    return {
      pizza,
    };
  }

  async getPizzas() {
    const { pizzas } = await this.getPizzasUseCase.execute();

    return {
      pizzas,
    };
  }

  async removePizzas(pizzaId: string) {
    await this.removePizzasUseCase.execute(pizzaId);
  }

  async updatePizza(pizzaId: string, data: Partial<Pizza>) {
    
  }
}
