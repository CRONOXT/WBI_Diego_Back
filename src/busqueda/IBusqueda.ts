import { CreateBrandDto } from 'src/brand/dto/create-brand.dto';
import { CreateShoesDto } from 'src/shoes/dto/create-shoes.dto';
import { Shoes } from 'src/shoes/model/shoes';
import { CreateShoesModelDto } from 'src/shoes_model/dto/create-shoes_model';
import { CreateStoreDto } from 'src/store/dto/create-storedto';
//INTERFACE USADA PARA PODER APLICAR EL PATRON REPOSITORY
//AQUI SE DEFINEN TODAS LAS FUNCIONES QUE SE VAN A CREAR EN
//SHOES REPOSITORY PARA LUEGO LLAMARLAS DESDE EL SERVICIO
export interface IBusqueda {
  busquedaPorMarca(filtro: CreateBrandDto): Promise<Shoes[]>;
  busqueda(): Promise<Shoes[]>;
  busquedaPorNombre(filtro: CreateShoesDto): Promise<Shoes[]>;
  busquedaPorModelo(filtro: CreateShoesModelDto): Promise<Shoes[]>;
  busquedaPorTienda(filtro: CreateStoreDto): Promise<Shoes[]>;
  busquedaPorFecha(filtro: CreateShoesDto): Promise<Shoes[]>;
}
