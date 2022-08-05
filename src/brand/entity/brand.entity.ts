import { Brand } from '../interfaces/brand';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { shoesEntity } from 'src/shoes/entity/shoes.entity';

@Entity()
export class brandEntity implements Brand {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}
