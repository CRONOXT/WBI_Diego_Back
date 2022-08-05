import { brandEntity } from 'src/brand/entity/brand.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Shoes } from '../model/shoes';
@Entity() //Se crean la tabla de zapatos en la base de datos Sqlite
export class shoesEntity extends Shoes {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @ManyToMany(() => brandEntity, {
    //Se crean la la relacion mucho a muchos de zapatos con marcas
    cascade: true,
  })
  @JoinTable()
  brand: brandEntity[];
  @Column()
  price: number;
}
