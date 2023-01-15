import { Pizza } from '@domain/entities/pizza';
export abstract class PizzaRepository {
  abstract create(pizza: Pizza): Promise<Pizza>
  abstract findAll(): Promise<Pizza[]>
  abstract remove(): Promise<void>
  abstract save(): Promise<Pizza>
}