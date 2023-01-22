import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaController } from './pizza/pizza.controller';
import { DatabaseModule } from './infra/db/database.module';
import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { PizzaSchema } from '@infra/db/typeorm/schemas/pizza.schema';
import { OrderSchema } from '@infra/db/typeorm/schemas/order.schema';

@Module({
  imports: [PizzaModule, TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: '123',
      database: 'pizza',
      entities: [PizzaSchema, OrderSchema],
      synchronize: true,
      logging: true,
    })
  })],
  controllers: [PizzaController],
  providers: [],
})
export class AppModule {}
