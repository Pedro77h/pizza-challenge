import { AddPizzaUseCase } from './../../../../src/application/UseCases/pizza/AddPizza.usecase';
import { makePizza } from '@test/factories/pizza.factory';
import { InMemoryPizzaRepository } from '@test/domain/repositories/in-memory-pizza-repository.repository';
describe('add pizza use case', () => {
  it('should be able add a pizza', async () => {
    //Average
    const pizzaProps = makePizza();
    const pizzaRepository = new InMemoryPizzaRepository();
    //Act
    const addPizza = new AddPizzaUseCase(pizzaRepository);
    const { pizza } = await addPizza.execute(pizzaProps);
    //Assert

    expect(pizzaRepository.pizzas).toHaveLength(1);
    expect(pizzaRepository.pizzas[0]).toEqual(pizza);
  });
});
