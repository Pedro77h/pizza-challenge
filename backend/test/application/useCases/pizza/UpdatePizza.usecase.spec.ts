import { makePizza } from '@test/factories/pizza.factory';
import { UpdatePizza } from './../../../../src/application/UseCases/pizza/UpdatePizza.usecase';
import { InMemoryPizzaRepository } from '@test/domain/repositories/in-memory-pizza-repository.repository';
describe('Update Pizza', () => {
  it('should be able to update a notification', async () => {
    //Arrange
    const pizzaRepository = new InMemoryPizzaRepository();
    const updatePizza = new UpdatePizza(pizzaRepository);
    //Act

    await pizzaRepository.create(makePizza());
    await updatePizza.execute('7', { name: '4 queijos', price: 15 });

    expect(pizzaRepository.pizzas).toEqual(
      expect.arrayContaining([expect.objectContaining({ price: 15 })]),
    );
  });
});
