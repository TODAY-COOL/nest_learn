import { IsString } from 'class-validator';
export class IMyService {
  @IsString()
  id?: string;

  @IsString()
  name?: string;
}
