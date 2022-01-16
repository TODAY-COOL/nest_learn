import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(
    @Query('name') name: string,
  ) {
    return this.catsService.getCats(name);
  }

  @Post()
  testPost(
    @Body('type') type: string,
    @Body('code') code: string,
  ) {
    return this.catsService.testPost(type, code);
  }
}
