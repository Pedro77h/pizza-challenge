import { GetPizzas } from './../../../../src/application/UseCases/pizza/GetPizzas.usecase';
import { InMemoryPizzaRepository } from '../../../domain/repositories/in-memory-pizza-repository.repository';
import { makePizza } from '@test/factories/pizza.factory';

describe('Get pizzas use case', () => {
  it('should be able to get all pizzas', async () => {
    //Average

    const pizzaRepository = new InMemoryPizzaRepository();

    await pizzaRepository.create(
      makePizza({
        id: '2',
        name: 'portuguesa',
      }),
    );

    await pizzaRepository.create(makePizza());

    //Act
    const getAllPizzas = new GetPizzas(pizzaRepository);
    const { pizzas } = await getAllPizzas.execute();
    //Assert

    expect(pizzaRepository.pizzas).toHaveLength(2);
    expect(pizzas).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'portuguesa' }),
        expect.objectContaining({ name: 'calabresa' }),
      ]),
    );
  });
});
