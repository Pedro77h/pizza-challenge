import { PizzaProps } from '@domain/entities/pizza';
export class UpdatePizzaDTO {
  name?: string;
  price?: number;
  ingredients?: string[];
  img?: string;
}
