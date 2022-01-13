import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    return this.catsService.getCats();
  }
}
