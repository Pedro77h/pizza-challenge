import { AddPizzaDTO } from './dto/AddPizza.dto';
import {
  AddPizzaResponse,
  AddPizzaUseCase,
} from './../application/UseCases/pizza/AddPizza.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzaService {
  constructor(private addPizzaUseCase: AddPizzaUseCase) {}

  async addPizza(body: AddPizzaDTO) {
    const pizza = await this.addPizzaUseCase.execute(body);

    return {
      pizza,
    };
  }
}
