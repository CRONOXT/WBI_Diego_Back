import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from '../brand/dto/create-brand.dto';
import { IBusqueda } from '../busqueda/IBusqueda';
import { Repository } from 'typeorm';
import { shoesEntity } from './entity/shoes.entity';
import { Shoes } from './model/shoes';
import { CreateShoesDto } from './dto/create-shoes.dto';
import { CreateShoesModelDto } from 'src/shoes_model/dto/create-shoes_model';
import { CreateStoreDto } from 'src/store/dto/create-storedto';

@Injectable()
export class searchRepository implements IBusqueda {
  constructor(
    @InjectRepository(shoesEntity)
    private shoesRepository: Repository<shoesEntity>,
  ) {}
  //FUNCION QUE BUSCA TODOS LOS ZAPATOS SEGUN EL MODELO ENVIADO, USANDO LA ETIQUETA LIKE
  //PARA PODER BUSCAR POR LETRA
  async busquedaPorModelo(filtro: CreateShoesModelDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.model', 'modeles')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('modeles.name like :name', { name: `%${filtro.model}%` })
      .getMany();
  }
  //FUNCION QUE BUSCA TODOS LOS ZAPATOS SEGUN EL UNA FECHA INSERTADA
  async busquedaPorFecha(filtro: CreateShoesDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.model', 'modeles')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('shoes.release_date like :name', { name: `%${filtro.name}%` })
      .getMany();
  }
  //FUNCION QUE BUSCA TODOS LOS ZAPATOS Y LOS ORDENA
  //DESDE LA FECHA DE LANZAMIENTO MAS RECIENTE HASTA LA ULTIMA
  async busquedaPorFechaAsc(): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.model', 'modeles')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.store', 'stores')
      .orderBy('shoes.release_date ', 'DESC')
      .getMany();
  }
  //FUNCION QUE BUSCA TODOS LOS ZAPATOS SEGUN SU NOMBRE, USANDO LA ETIQUETA LIKE
  //PARA PODER BUSCAR POR LETRA
  async busquedaPorNombre(filtro2: CreateShoesDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.model', 'models')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('shoes.name like :name', { name: `%${filtro2.name}%` })
      .getMany();
  }
  //FUNCION QUE BUSCA TODOS LOS ZAPATOS SEGUN SU MARCA, USANDO LA ETIQUETA LIKE
  //PARA PODER BUSCAR POR LETRA
  async busquedaPorMarca(filtro: CreateBrandDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.model', 'models')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('brandes.name like :name', { name: `%${filtro.brand}%` })
      .getMany();
  }
  //FUNCION QUE BUSCA TODOS LOS ZAPATOS SEGUN ELLA TEINDA DE DONDE PROBIENEN,
  //USANDO LA ETIQUETA LIKE PARA PODER BUSCAR POR LETRA
  async busquedaPorTienda(filtro: CreateStoreDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.model', 'models')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('stores.name like :name', { name: `%${filtro.store}%` })
      .getMany();
  }
  //BUSQUEDA DE TODOS LOS ZAPATOS
  async busqueda(): Promise<Shoes[]> {
    return await this.shoesRepository.find({
      relations: ['brand', 'model', 'store'],
    });
  }
}
