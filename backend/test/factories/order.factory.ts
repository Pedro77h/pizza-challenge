import { OrderProps } from '@domain/entities/order';
import { Order } from './../../src/domain/entities/order';
import { makePizza } from './pizza.factory';


type Override = Partial<OrderProps>


export function makeOrder(override: Override = {}) {
  return new Order({
    id: '7',
    costumerName: 'John',
    isDelivered: 0,
    items: [
      makePizza(),
      makePizza()
    ],
    ...override
  })
}