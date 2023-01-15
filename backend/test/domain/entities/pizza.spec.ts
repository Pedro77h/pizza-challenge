import { Pizza, PizzaProps } from '@domain/entities/pizza';
describe('pizza', () => {
  it('should be able to return a assign id', () => {
    const pizzaProps: PizzaProps = {
      id: 'foo',
      name: 'calabresa',
      price: 7,
      ingredients: ['tomate', 'calda'],
      img: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg'
    };

    const pizza = new Pizza(pizzaProps);

    expect(pizza.id).toEqual('foo');
  });
});
