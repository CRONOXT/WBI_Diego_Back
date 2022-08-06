import { IsNotEmpty, IsString } from 'class-validator';
export class CreateShoesModelDto {
  @IsString()
  @IsNotEmpty()
  model: string;
}
