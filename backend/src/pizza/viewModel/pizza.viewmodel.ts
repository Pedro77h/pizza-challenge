import { Pizza } from '@domain/entities/pizza';
export class PizzaVielModel {
  static toHTTP(pizza: Pizza) {
    return {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      ingredients: pizza.ingredients,
      img: pizza.img,
    };
  }
}
