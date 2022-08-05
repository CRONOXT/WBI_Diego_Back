import { Controller, Get, Query } from '@nestjs/common';
import { CreateBrandDto } from 'src/brand/dto/create-brand.dto';
import { ResponseToReturn } from 'src/compartida/responsereturn';
import { CreateShoesDto } from './dto/create-shoes.dto';
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
  constructor(private shoesService: ShoesService) {}

  @Get('/todos')
  async serchshoes() {
    return ResponseToReturn(await this.shoesService.searchshoes());
  }
  @Get()
  async searchshoesforbrand(@Query() brand: CreateBrandDto) {
    console.log(brand);
    return ResponseToReturn(await this.shoesService.serchforbrand(brand));
  }
}
