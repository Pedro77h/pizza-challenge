import { AddPizzaUseCase } from './../../../../src/application/UseCases/pizza/AddPizza.usecase';
import { makePizza } from '../../../factories/pizza.factory';
import { InMemoryPizzaRepository } from './../../../domain/repositories/in-memory-pizza-repository.repository';
import { RemovePizzas } from './../../../../src/application/UseCases/pizza/RemovePizza.usecase';
describe('Remove pizzas', () => {
  it('should be able to remove a pizza', async () => {
    //Arrange
    const pizzaRepository = new InMemoryPizzaRepository();
    const removePizza = new RemovePizzas(pizzaRepository);
    //Act
    await pizzaRepository.create(makePizza({
      id: '2',
    }))

    await pizzaRepository.create(makePizza({
      id: '3',
    }))

    removePizza.execute('3')
    //Assert
    expect(pizzaRepository.pizzas).toHaveLength(1);
    expect(pizzaRepository.pizzas).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: '3' })]),
    );
  });
 /*  it('should be able to  ', () => {}); */
});
