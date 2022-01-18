import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  list() {
    return {
      meta: {
        total: 123,
        pageSize: 10,
        current: 1,
        hasNextPage: true,
        isLastPage: false,
      },
      list: Array.from({ length: 10 }, (_, i) => {
        return {
          id: i,
          title: 'home' + i,
          value: i,
        };
      }),
    };
  }
}
