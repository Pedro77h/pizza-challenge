import { Pizza, PizzaProps } from '@domain/entities/pizza';
describe('pizza', () => {
  it('should be able to return a assign id', () => {
    const pizzaProps: PizzaProps = {
      id: 'foo',
      name: 'calabresa',
      price: 7,
      ingredients: ['tomate', 'calda'],
    };

    const pizza = new Pizza(pizzaProps);

    expect(pizza.id).toEqual('foo');
  });
});
