import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { shoesEntity } from './entity/shoes.entity';
import { searchRepository } from './shoes.repository';
@Module({
  exports: [
    {
      provide: 'IBusqueda',
      useClass: searchRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([shoesEntity])],
  controllers: [ShoesController],
  providers: [
    ShoesService,
    searchRepository,
    {
      provide: 'IBusqueda',
      useClass: searchRepository,
    },
  ],
})
export class ShoesModule {}
