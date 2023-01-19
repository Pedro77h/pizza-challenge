import { makeOrder } from '@test/factories/order.factory';
import { InMemoryOrderRepository } from '@test/domain/repositories/in-memory-order-repository.repository';
import { FinishOrder } from './../../../../src/application/UseCases/order/FinishOrder.usecase';

describe('Finish order', () => {
  it('should be able to finish a order', async () => {
    //Arrange
    const orderRepository = new InMemoryOrderRepository();
    const finishOrder = new FinishOrder(orderRepository);

    //Act
    await orderRepository.create(makeOrder({id: '7'}))
    await finishOrder.execute('7')

    //Assert
    expect(orderRepository.orders[0].isDelivered).toEqual(1)
  });
});