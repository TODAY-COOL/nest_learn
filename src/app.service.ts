import { Injectable } from '@nestjs/common';
import { IMyService } from './service/service.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postRequest(props: IMyService): string {
    console.log(props, '带参');
    return 'this is a post request!!!!!!';
  }
}
