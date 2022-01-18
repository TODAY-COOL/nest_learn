import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin')
  getCats(@Query('name') name: string) {
    return this.catsService.getCats(name);
  }

  @Post()
  testPost(@Body('type') type: string, @Body('code') code: string) {
    return this.catsService.testPost(type, code);
  }
}
