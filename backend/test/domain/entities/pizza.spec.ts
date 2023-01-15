import { Pizza, PizzaProps } from '@domain/entities/pizza';
describe('pizza', () => {
  it('should be able to assign values on pizza', () => {
    const pizzaProps: PizzaProps = {
      name: 'calabresa',
      price: 7,
      ingredients: ['tomate', 'calda'],
    };

    const pizza = new Pizza(pizzaProps);

    console.log(pizza);

    expect(pizza).toEqual(pizzaProps)
    

  });
});
