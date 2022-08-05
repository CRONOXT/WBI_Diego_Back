import { Injectable } from '@nestjs/common';
import { Shoes } from './interfaces/shoes';
@Injectable()
export class ShoesService {
  shoe: Shoes[] = [
    {
      id: '1',
      name: 'Shark',
      mark: 'Adidas',
      price: 2500,
    },
    {
      id: '2',
      name: 'Crocs',
      mark: 'Crocs',
      price: 1500,
    },
  ];
  getShoes(): Shoes[] {
    return this.shoe;
  }
  getShoe(id): Shoes {
    return this.shoe.find((Shoes) => Shoes.id === id);
  }
}
