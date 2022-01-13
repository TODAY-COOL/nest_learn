import {
  Controller,
  Get,
  Post,
  Header,
  Req,
  Query,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
interface IQuery {
  id?: string;
  name?: string;
}

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @All()
  // creatProxy() {
  //   return 'sssssss';
  // }
  @Get('all')
  findAll(): string {
    return 'this all apis';
  }

  @Get()
  getHello(@Req() request: Request): string {
    return this.appService.getHello(request);
  }

  @Post()
  @Header('Content-Type', 'application/json;utf8')
  create(): string {
    const people = {
      name: '小明',
      id: 's',
    };
    return this.appService.postRequest(people);
  }
}

@Controller('my')
export class MyAppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  myGet(@Req() request: Request): string {
    console.log(request.query, '请求的数据');
    return 'my apis get';
  }

  @Get('query')
  myQuery(@Query() query: IQuery): string {
    console.log(query);
    return 'this my query';
  }

  // @Get('ID/:id')
  @Get(':id')
  myDynamic(@Param('id') id: string): string {
    console.log(id, '传参ID');
    return 'this my dynamic apis';
  }
}
