import { DatabaseModule } from './../infra/db/database.module';
import { AddPizzaUseCase } from './../application/UseCases/pizza/AddPizza.usecase';
import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { pizzaProviders } from 'src/pizza/providers/pizza.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaController],
  providers: [PizzaService, AddPizzaUseCase , ...pizzaProviders],
  exports: [PizzaService],
})
export class PizzaModule {}
