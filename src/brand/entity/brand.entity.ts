import { Brand } from '../model/brand';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { shoesEntity } from 'src/shoes/entity/shoes.entity';

@Entity() //Se crean la tabla de marca en la base de datos Sqlite
export class brandEntity implements Brand {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @OneToMany(() => shoesEntity, (shoes) => shoes.brand)
  shoes: shoesEntity[];
}
