import { UpdatePizzaRequest } from '@app/UseCases/pizza/UpdatePizza.usecase';
import { Pizza } from '@domain/entities/pizza';
export abstract class PizzaRepository {
  abstract create(pizza: Pizza): Promise<void>;
  abstract findAll(): Promise<Pizza[]>;
  abstract findOneOrFail(pizzaId: string): Promise<Pizza | null>;
  abstract remove(pizzaId: string): Promise<void>;
  abstract save(pizzaId: string, data: UpdatePizzaRequest): Promise<void>;
}
