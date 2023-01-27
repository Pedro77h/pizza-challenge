import { randomUUID } from 'node:crypto';

export type PizzaProps = {
  id?: string;
  name: string;
  price: number;
  ingredients: string[];
  img?: string;
  createdAt?: Date;
};

export class Pizza {
  private props: PizzaProps;

  constructor(props: PizzaProps) {
    this.props = {
      ...props,
      id: props?.id ?? randomUUID(),
      createdAt: props?.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get price(): number {
    return this.props.price;
  }

  public get ingredients(): string[] {
    return this.props.ingredients;
  }

  public get img(): string {
    return this.props.img;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
