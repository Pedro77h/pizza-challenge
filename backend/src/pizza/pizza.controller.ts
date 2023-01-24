
import { PizzaViewModel } from './viewModel/pizza.viewmodel';
import { AddPizzaDTO } from './dto/AddPizza.dto';
import { PizzaService } from './pizza.service';
import { Body, Controller, Get, Post } from '@nestjs/common';


@Controller('pizza')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Post('create')
  async createPizza(@Body() body: AddPizzaDTO) {
    const { name, price, ingredients } = body;

    if (!name || !price || !ingredients) throw new Error();

      const { pizza } = await this.pizzaService.addPizza(body);

    return {
      pizza: PizzaViewModel.toHTTP(pizza),
    };
  }

  @Get()
  async getAllPizzas() {
    
  }
}
