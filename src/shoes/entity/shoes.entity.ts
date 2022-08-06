import { brandEntity } from 'src/brand/entity/brand.entity';
import { shoes_modelEntity } from 'src/shoes_model/entity/shoes_model.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Shoes } from '../model/shoes';
@Entity() //Se crean la tabla de zapatos en la base de datos Sqlite
export class shoesEntity extends Shoes {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @ManyToOne(() => brandEntity, (brand) => brand.shoes)
  @JoinColumn({ name: 'brand_id' })
  brand: brandEntity;
  @ManyToOne(() => shoes_modelEntity, (brand) => brand.shoes)
  @JoinColumn({ name: 'model_id' })
  model: brandEntity;
  @Column()
  price: number;
}
