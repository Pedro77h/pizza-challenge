import { Pizza } from '@domain/entities/pizza';
export abstract class PizzaRepository {
  abstract create(pizza: Pizza): Promise<void>
  abstract findAll(): Promise<Pizza[]>
  abstract remove(): Promise<void>
  abstract save(): Promise<Pizza>
}