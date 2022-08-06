import { shoesEntity } from 'src/shoes/entity/shoes.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { shoes_model } from '../model/shoes_model';

@Entity() //Se crean la tabla de Modelos en la base de datos Sqlite
export class shoes_modelEntity extends shoes_model {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @OneToMany(() => shoesEntity, (shoes) => shoes.model)
  shoes: shoesEntity[];
}
