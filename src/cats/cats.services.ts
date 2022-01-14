import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats() {
    return 'cats service';
  }

  testPost() {
    return {
      name: 'sss',
      code: '2',
    };
  }
}
