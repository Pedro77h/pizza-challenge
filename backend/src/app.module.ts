import { PizzaController } from './pizza/pizza.controller';
import { DatabaseModule } from './infra/db/database.module';
import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [DatabaseModule, PizzaModule],
  controllers: [PizzaController],
  providers: [],
})
export class AppModule {}
