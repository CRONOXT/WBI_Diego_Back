import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from '../brand/dto/create-brand.dto';
import { IBusqueda } from '../busqueda/IBusqueda';
import { Repository } from 'typeorm';
import { shoesEntity } from './entity/shoes.entity';
import { Shoes } from './model/shoes';
import { CreateShoesDto } from './dto/create-shoes.dto';

@Injectable()
export class searchRepository implements IBusqueda {
  constructor(
    @InjectRepository(shoesEntity)
    private shoesRepository: Repository<shoesEntity>,
  ) {}

  async busquedaPorNombre(filtro2: CreateShoesDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .where('shoes.name=:name', { name: `${filtro2.name}` })
      .getMany();
  }

  async busquedaPorMarca(filtro: CreateBrandDto): Promise<Shoes[]> {
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .where('brandes.name =:name', { name: `${filtro.brand}` })
      .getMany();
  }
  async busqueda(): Promise<Shoes[]> {
    return await this.shoesRepository.find({
      relations: ['brand'],
    });
  }
}
