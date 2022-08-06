import { CreateBrandDto } from 'src/brand/dto/create-brand.dto';
import { CreateShoesDto } from 'src/shoes/dto/create-shoes.dto';
import { Shoes } from 'src/shoes/model/shoes';

export interface IBusqueda {
  busquedaPorMarca(filtro: CreateBrandDto): Promise<Shoes[]>;
  busqueda(): Promise<Shoes[]>;
  busquedaPorNombre(filtro: CreateShoesDto): Promise<Shoes[]>;
}
