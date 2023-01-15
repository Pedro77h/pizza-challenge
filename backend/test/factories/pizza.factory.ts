import { Pizza, PizzaProps } from "@domain/entities/pizza";

type Override = Partial<PizzaProps>

export function makePizza(override: Override = {}) {
  return new Pizza({
    id: '7',
    name: 'calabresa',
    price: 7,
    ingredients: ['tomate', 'calabresa'],
    img: 'calabresa',
    ...override
  })
}