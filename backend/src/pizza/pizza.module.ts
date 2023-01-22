import { PizzaSchema } from './../infra/db/typeorm/schemas/pizza.schema';
import { PizzaTypeOrmRepository } from '@infra/db/typeorm/repositories/PizzaTypeOrmRepository.repository';
import { PizzaRepository } from '@domain/repositories/pizza.repository';
import { DatabaseModule } from './../infra/db/database.module';
import { AddPizzaUseCase } from './../application/UseCases/pizza/AddPizza.usecase';
import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { pizzaProviders } from 'src/pizza/providers/pizza.provider';
import { DataSource } from 'typeorm';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PizzaSchema])],
  controllers: [PizzaController],
  providers: [
    PizzaService,
    AddPizzaUseCase,
    PizzaTypeOrmRepository,
    ...pizzaProviders,
    {
      provide: PizzaRepository,
      useFactory: (dataSource: DataSource) => {
        return new PizzaTypeOrmRepository(
          dataSource.getRepository(PizzaSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: AddPizzaUseCase,
      useFactory: (pizzaRepo: PizzaRepository) => {
        return new AddPizzaUseCase(pizzaRepo);
      },
      inject: [PizzaTypeOrmRepository],
    },
  ],
  exports: [PizzaService],
})
export class PizzaModule {}
