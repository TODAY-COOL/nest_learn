import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.services';

@Controller('home')
export class HomeControl {
  constructor(private readonly homeServe: HomeService) {}

  @Get()
  homeList() {
    return this.homeServe.list();
  }
}
