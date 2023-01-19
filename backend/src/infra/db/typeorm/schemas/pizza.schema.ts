import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'pizza' })
export class PizzaSchema {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column('text', { array: true })
  ingredients: string[];

  @Column()
  img: string;
}
