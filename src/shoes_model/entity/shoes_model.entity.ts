import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { shoes_model } from '../model/shoes_model';

@Entity() //Se crean la tabla de zapatos en la base de datos Sqlite
export class shoes_modelEntity extends shoes_model {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @OneToMany(() => shoes_modelEntity, (shoes) => shoes.shoes)
  shoes: shoes_modelEntity[];
}
