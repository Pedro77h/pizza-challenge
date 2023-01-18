import { makeOrder } from '@test/factories/order.factory';
import { AddOrder } from './../../../../src/application/UseCases/order/AddOrder.usecase';
import { InMemoryOrderRepository } from './../../../domain/repositories/in-memory-order-repository.repository';
describe('Add Order', () => {
  it('Should be able to add a order', async () => {
    //Arrange
    const orderRepository = new InMemoryOrderRepository();
    const addOrder = new AddOrder(orderRepository);

    //Act
    await addOrder.execute(makeOrder());

    //Assert

    expect(orderRepository.orders).toHaveLength(1)
    expect(orderRepository.orders).toEqual(expect.arrayContaining([expect.objectContaining({costumerName: 'John'})]))
  });
});
