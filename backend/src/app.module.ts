import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaController } from './pizza/pizza.controller';
import { DatabaseModule } from './infra/db/database.module';
import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [PizzaModule],
  controllers: [PizzaController],
  providers: [],
})
export class AppModule {}
