import { Pizza } from '@domain/entities/pizza';
import { pizza as RawPizza } from '@prisma/client';
export class PrismaPizzaMapper {
  static toPrisma(pizza: Pizza | Partial<Pizza>) {
    return {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      ingredients: pizza.ingredients,
      img: pizza.img,
      createdAt: pizza.createdAt,
    };
  }

  static toDomain(raw: RawPizza) {
    return new Pizza({
      id: raw.id,
      name: raw.name,
      img: raw.img,
      ingredients: raw.ingredients,
      price: raw.price,
      createdAt: raw.createdAt,
    });
  }
}
