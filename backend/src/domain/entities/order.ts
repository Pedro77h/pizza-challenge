import { randomUUID } from 'node:crypto';
import { Pizza } from './pizza';

export type OrderProps = {
  id?: string;
  items: Pizza[];
  costumerName: string;
  isDelivered?: number;
  orderedAt?: Date;
};

export class Order {
  private props: OrderProps;

  constructor(props: OrderProps) {
    this.props = {
      ...props,
      isDelivered: props.isDelivered ?? 0,
      orderedAt: props.orderedAt ?? new Date(),
      id: props.id ?? randomUUID(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get items(): Pizza[] {
    return this.props.items;
  }

  public get costumerName(): string {
    return this.props.costumerName;
  }

  public get isDelivered(): number {
    return this.props.isDelivered;
  }

  public get orderedAt(): Date {
    return this.props.orderedAt;
  }

  public deliver(): void {
    this.props.isDelivered = 1;
  }
}
