import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { IMyService } from './service/service.interface';

@Injectable()
export class AppService {
  getHello(@Req() request: Request): string {
    console.log(request.query, '请求带参');
    return 'Hello World!';
  }

  postRequest(props: IMyService): string {
    console.log(props, '带参');
    return 'this is a post request!!!!!!';
  }
}
