import { Inject, Injectable } from '@nestjs/common';
import { CreateBrandDto } from 'src/brand/dto/create-brand.dto';
import { Brand } from 'src/brand/model/brand';
import { Shoes } from './model/shoes';
import { searchRepository } from './shoes.repository';
@Injectable()
export class ShoesService {
  constructor(
    @Inject('IBusqueda')
    private busquedaRepositorio: searchRepository,
  ) {}
  async searchshoes(): Promise<Shoes[]> {
    return await this.busquedaRepositorio.busqueda();
  }
  async serchforbrand(filtro: CreateBrandDto): Promise<Brand[]> {
    return await this.busquedaRepositorio.busquedaPorMarca(filtro);
  }
}
