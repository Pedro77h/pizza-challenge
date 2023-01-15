import { randomUUID } from 'node:crypto';

export type PizzaProps = {
  name: string;
  price: number;
  ingredients: string[];
};

export class Pizza {
  private _id: string;
  private props: PizzaProps;

  constructor(props: PizzaProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
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
}
