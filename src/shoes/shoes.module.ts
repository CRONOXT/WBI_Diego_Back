import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { shoesEntity } from './entity/shoes.entity';
@Module({
  imports: [TypeOrmModule.forFeature([shoesEntity])],
  controllers: [ShoesController],
  providers: [ShoesService],
})
export class ShoesModule {}
