import { UpdatePizzaDTO } from './dto/UpdatePizza.dto';
import { PizzaViewModel } from './viewModel/pizza.viewmodel';
import { AddPizzaDTO } from './dto/AddPizza.dto';
import { PizzaService } from './pizza.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { textChangeRangeIsUnchanged } from 'typescript';

@Controller('pizza')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Post('create')
  async create(@Body() body: AddPizzaDTO) {
    const { name, price, ingredients } = body;

    if (!name || !price || !ingredients) throw new Error();

    const { pizza } = await this.pizzaService.addPizza(body);

    return {
      pizza: PizzaViewModel.toHTTP(pizza),
    };
  }

  @Get()
  async getAll() {
    const { pizzas } = await this.pizzaService.getPizzas();

    return {
      pizzas: pizzas.map((pizza) => PizzaViewModel.toHTTP(pizza)),
    };
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    await this.pizzaService.removePizzas(id);
  }

  @Patch(':id/update')
  async update(@Body() data: UpdatePizzaDTO, @Param('id') id: string) {
    const { pizza } = await this.pizzaService.updatePizza(id, data);

    return {
      pizza,
    };
  }
}
