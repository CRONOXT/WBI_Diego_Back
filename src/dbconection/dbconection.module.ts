import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { brandEntity } from 'src/brand/entity/brand.entity';
import { shoesEntity } from 'src/shoes/entity/shoes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bd.sqlite',
      entities: [shoesEntity, brandEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbconectionModule {}
