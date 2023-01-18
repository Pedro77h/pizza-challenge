import { Order } from './../../../src/domain/entities/order';
import { makePizza } from '@test/factories/pizza.factory';
import { OrderProps } from '@domain/entities/order';
describe('order', () => {
  it('should to be able to create a notification', () => {
    const order = new Order({
      id: '1',
      items: [makePizza(), makePizza()],
      costumerName: 'John',
      isDelivered: 1,
      orderedAt: new Date(),
    });

    expect(order).toBeTruthy();
  });
  it('should be able to return assign items', () => {
    const orderProps: OrderProps = {
      id: '7',
      items: [makePizza(), makePizza()],
      costumerName: 'John',
    };

    const order = new Order(orderProps);

    expect(order.id).toStrictEqual('7');
    expect(order.orderedAt).toEqual(expect.any(Date));
    expect(order.isDelivered).toStrictEqual(0)
  });
});
