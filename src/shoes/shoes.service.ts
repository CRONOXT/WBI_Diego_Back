import { Inject, Injectable } from '@nestjs/common';
import { CreateBrandDto } from 'src/brand/dto/create-brand.dto';
import { CreateShoesModelDto } from 'src/shoes_model/dto/create-shoes_model';
import { CreateStoreDto } from 'src/store/dto/create-storedto';
import { CreateShoesDto } from './dto/create-shoes.dto';
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
  async serchforbrand(filtro: CreateBrandDto): Promise<Shoes[]> {
    return await this.busquedaRepositorio.busquedaPorMarca(filtro);
  }
  async searchforname(filtro: CreateShoesDto): Promise<Shoes[]> {
    return await this.busquedaRepositorio.busquedaPorNombre(filtro);
  }
  async searchformodel(filtro: CreateShoesModelDto): Promise<Shoes[]> {
    return await this.busquedaRepositorio.busquedaPorModelo(filtro);
  }
  async searchforstore(filtro: CreateStoreDto): Promise<Shoes[]> {
    return await this.busquedaRepositorio.busquedaPorTienda(filtro);
  }
  async searchfordate(filtro: CreateShoesDto): Promise<Shoes[]> {
    return await this.busquedaRepositorio.busquedaPorFecha(filtro);
  }
}
