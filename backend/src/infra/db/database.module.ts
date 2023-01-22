import { PizzaSchema } from './typeorm/schemas/pizza.schema';
import { PizzaTypeOrmRepository } from '@infra/db/typeorm/repositories/PizzaTypeOrmRepository.repository';
import { PizzaRepository } from '@domain/repositories/pizza.repository';
import { Module } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { databaseProviders } from './typeorm/providers/typeorm.providers';
import {
  getDataSourceName,
  getDataSourceToken,
  TypeOrmModule,
} from '@nestjs/typeorm';

@Module({
  imports: [],
  providers: [
    ...databaseProviders,
  
  ],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
