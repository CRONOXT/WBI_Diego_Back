import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateShoesDto } from './dto/create-shoes.dto';
import { ShoesService } from './shoes.service';
import { Shoes } from './interfaces/shoes';
@Controller('shoes')
export class ShoesController {
  constructor(private shoesService: ShoesService) {}

  @Get()
  getshoes(): Shoes[] {
    return this.shoesService.getShoes();
  }
  @Get(':shoes_id')
  getshoe(@Param('shoes_id') shoes_id) {
    return this.shoesService.getShoe(shoes_id);
  }

  @Post()
  createshoes(@Body() shoes: CreateShoesDto) {
    return 'Creando zapatos';
  }
  @Put()
  updateshoes() {
    return 'Actualizando un zapato';
  }
  @Delete()
  deleteshoes() {
    return 'Borrando zapatos';
  }
}
