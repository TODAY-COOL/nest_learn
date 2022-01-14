import { Controller, Get, Header, Post } from '@nestjs/common';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    return this.catsService.getCats();
  }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  testPost() {
    console.log('请求到了这里吗');
    return this.catsService.testPost();
  }
}
