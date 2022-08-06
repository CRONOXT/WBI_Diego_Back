import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Store } from '../model/store';

@Entity() //Se crean la tabla de Stores en la base de datos Sqlite
export class StoreEntity extends Store {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  direccion: string;
}
