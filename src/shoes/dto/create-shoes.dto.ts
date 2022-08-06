import { IsNotEmpty, IsString } from 'class-validator';
export class CreateShoesDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
