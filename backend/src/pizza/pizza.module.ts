import { UpdatePizza } from './../application/UseCases/pizza/UpdatePizza.usecase';
import { RemovePizzas } from './../application/UseCases/pizza/RemovePizza.usecase';
import { GetPizzas } from './../application/UseCases/pizza/GetPizzas.usecase';
import { DatabaseModule } from './../infra/db/database.module';
import { AddPizzaUseCase } from './../application/UseCases/pizza/AddPizza.usecase';
import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaController],
  providers: [
    PizzaService,
    AddPizzaUseCase,
    GetPizzas,
    RemovePizzas,
    UpdatePizza,
  ],
  exports: [PizzaService],
})
export class PizzaModule {}
