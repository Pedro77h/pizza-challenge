import { makeOrder } from '@test/factories/order.factory';
import { GetOrders } from '@app/UseCases/order/GetOrder.usecase';
import { InMemoryOrderRepository } from '@test/domain/repositories/in-memory-order-repository.repository';
describe('Get Orders', () => {
  it('should be able to get all orders', async () => {
    //Arrange
    const orderRepository = new InMemoryOrderRepository();
    const getOrders = new GetOrders(orderRepository);

    //Act

    await orderRepository.create(makeOrder());
    await orderRepository.create(makeOrder());

    const { orders } = await getOrders.execute();

    //Assert

    expect(orders).toEqual(orderRepository.orders);
  });
});
