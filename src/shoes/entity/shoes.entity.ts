import { brandEntity } from 'src/brand/entity/brand.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity()
export class shoesEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @ManyToMany(() => brandEntity, {
    cascade: true,
  })
  @JoinTable()
  brand: brandEntity[];
  @Column()
  price: number;
}
