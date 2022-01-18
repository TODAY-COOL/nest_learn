import { Module } from '@nestjs/common';
import { HomeControl } from './home.controlller';
import { HomeService } from './home.services';

@Module({
  providers: [HomeService],
  controllers: [HomeControl],
})
export class HomeModule {}
