import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postRequest(props) {
    console.log(props.body, '带参');
    return {
      ...props,
    };
  }
}
