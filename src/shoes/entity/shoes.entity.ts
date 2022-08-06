import { brandEntity } from 'src/brand/entity/brand.entity';
import { shoes_modelEntity } from 'src/shoes_model/entity/shoes_model.entity';
import { StoreEntity } from 'src/store/entity/store.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
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
  @Column()
  imagen: string;
  @Column()
  release_date: string;
  @ManyToOne(() => brandEntity, (brand) => brand.shoes)
  @JoinColumn({ name: 'brand_id' })
  brand: brandEntity;
  @ManyToOne(() => shoes_modelEntity, (model) => model.shoes)
  @JoinColumn({ name: 'model_id' })
  model: shoes_modelEntity;
  @ManyToMany(() => StoreEntity, {
    cascade: true,
  })
  @JoinTable()
  store: StoreEntity[];
  @Column()
  price: number;
}
