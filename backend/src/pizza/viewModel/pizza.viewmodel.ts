import { Pizza } from '@domain/entities/pizza';
export class PizzaViewModel {
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
