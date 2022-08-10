import { Controller, Get, Query } from '@nestjs/common';
import { CreateBrandDto } from 'src/brand/dto/create-brand.dto';
import { ResponseToReturn } from 'src/compartida/responsereturn';
import { CreateShoesModelDto } from 'src/shoes_model/dto/create-shoes_model';
import { CreateStoreDto } from 'src/store/dto/create-storedto';
import { CreateShoesDto } from './dto/create-shoes.dto';
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
  constructor(private shoesService: ShoesService) {}

  @Get('/todos')
  async serchshoes() {
    return ResponseToReturn(await this.shoesService.searchshoes());
  }
  @Get('/brand')
  async searchshoesforbrand(@Query() brand: CreateBrandDto) {
    return ResponseToReturn(await this.shoesService.serchforbrand(brand));
  }
  @Get('/name')
  async searchshoesforname(@Query() name: CreateShoesDto) {
    return ResponseToReturn(await this.shoesService.searchforname(name));
  }
  @Get('/model')
  async searchshoesformodel(@Query() name: CreateShoesModelDto) {
    return ResponseToReturn(await this.shoesService.searchformodel(name));
  }
  @Get('/store')
  async searchshoesforstore(@Query() name: CreateStoreDto) {
    return ResponseToReturn(await this.shoesService.searchforstore(name));
  }
  @Get('/date')
  async searchshoesfordate(@Query() name: CreateShoesDto) {
    return ResponseToReturn(await this.shoesService.searchfordate(name));
  }
  @Get('/date/asc')
  async searchshoesfordateAsc() {
    return ResponseToReturn(await this.shoesService.searchfordateAsc());
  }
}
