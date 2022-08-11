import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { brandEntity } from 'src/brand/entity/brand.entity';
import { shoesEntity } from 'src/shoes/entity/shoes.entity';
import { shoes_modelEntity } from 'src/shoes_model/entity/shoes_model.entity';
import { StoreEntity } from 'src/store/entity/store.entity';
//DBCONECTION SE CREO PARA PODER CAMBIAR FACILMENTE EL MANEJADOR DE BASE DE DATOS
//EN EL CASO DE QUE SE AMERITE
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bd.sqlite',
      entities: [shoesEntity, brandEntity, shoes_modelEntity, StoreEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbconectionModule {}
