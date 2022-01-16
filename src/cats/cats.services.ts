import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats(name?: string) {
    return {
      code: 200,
      name,
    };
  }

  testPost(type?: string, code?: string) {
    return {type, code};
  }
}
