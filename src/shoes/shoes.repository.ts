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

  async busquedaPorModelo(filtro: CreateShoesModelDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.model', 'modeles')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('modeles.name =:name', { name: `${filtro.model}` })
      .getMany();
  }
  async busquedaPorFecha(filtro: CreateShoesDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.model', 'modeles')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('shoes.release_date =:name', { name: `${filtro.name}` })
      .getMany();
  }
  async busquedaPorFechaAsc(): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.model', 'modeles')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.store', 'stores')
      .orderBy('shoes.release_date', 'DESC')
      .getMany();
  }
  async busquedaPorNombre(filtro2: CreateShoesDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.model', 'models')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('shoes.name=:name', { name: `${filtro2.name}` })
      .getMany();
  }

  async busquedaPorMarca(filtro: CreateBrandDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.model', 'models')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('brandes.name =:name', { name: `${filtro.brand}` })
      .getMany();
  }

  async busquedaPorTienda(filtro: CreateStoreDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .leftJoinAndSelect('shoes.model', 'models')
      .leftJoinAndSelect('shoes.store', 'stores')
      .where('stores.name =:name', { name: `${filtro.store}` })
      .getMany();
  }

  async busqueda(): Promise<Shoes[]> {
    return await this.shoesRepository.find({
      relations: ['brand', 'model', 'store'],
    });
  }
}
