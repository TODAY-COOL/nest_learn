import { IsNumber, IsString } from 'class-validator';

export class HomeList {
  @IsString()
  name: string;

  @IsNumber()
  id: number;

  @IsString()
  title: string;
}
