import { Column, PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity({ name: 'order' })
export class OrderSchema {
  @PrimaryColumn('uuid')
  id: string;

  @Column('text',{array:true})
  items: any[];

  @Column()
  costumerName: string;

  @Column()
  isDelivered: number

  @Column()
  orderedAt: Date
}
