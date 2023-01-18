import { InMemoryOrderRepository } from '@test/domain/repositories/in-memory-order-repository.repository';
import { makeOrder } from '@test/factories/order.factory';
import { FindOrder } from './../../../../src/application/UseCases/order/FindOrder.usecase';

describe('Find order', () => {
  it('should be able to find ome order', async () => {
    //Arrange
    const orderRepository = new InMemoryOrderRepository();
    const findOrder = new FindOrder(orderRepository);

    //Act
    await orderRepository.create(
      makeOrder({
        id: '1',
      }),
    );
    const createdOrder = await orderRepository.create(
      makeOrder({
        id: '2',
        costumerName: 'pedro',
      }),
    );

    const {order} = await findOrder.execute('2');

    //Assert
    expect(order).toEqual(expect.objectContaining({costumerName:'pedro'}));
  });
});
