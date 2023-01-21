import { PizzaRepository } from '@domain/repositories/pizza.repository';
import { DataSource } from 'typeorm';
import { PizzaSchema } from '../../infra/db/typeorm/schemas/pizza.schema';

export const pizzaProviders = [
  {
    provide: PizzaRepository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PizzaSchema),
    inject: ['DATA_SOURCE'],
  },
];