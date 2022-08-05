import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from '../brand/dto/create-brand.dto';
import { IBusqueda } from '../busqueda/IBusqueda';
import { Repository } from 'typeorm';
import { shoesEntity } from './entity/shoes.entity';
import { Shoes } from './model/shoes';

@Injectable()
export class searchRepository implements IBusqueda<CreateBrandDto, Shoes> {
  constructor(
    @InjectRepository(shoesEntity)
    private shoesRepository: Repository<shoesEntity>,
  ) {}
  async busquedaPorMarca(filtro: CreateBrandDto): Promise<Shoes[]> {
    console.log(filtro);
    return await this.shoesRepository
      .createQueryBuilder('shoes')
      .leftJoinAndSelect('shoes.brand', 'brandes')
      .where('brandes.name =:name', { name: `${filtro.name}` })
      .getMany();
  }
  async busqueda(): Promise<Shoes[]> {
    return await this.shoesRepository.find({
      relations: ['brand'],
    });
  }
}
