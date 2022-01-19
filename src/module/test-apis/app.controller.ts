import {
  Controller,
  Get,
  Post,
  Req,
  Query,
  Param,
  Body,
  UseFilters,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { HttpExceptionFilter } from '../../error/http-exception.filter';
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
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  // @Header('Content-Type', 'application/json;utf8')
  create(@Req() req): string {
    return this.appService.postRequest(req);
  }

  @Post('post')
  // @Header('Access-Control-Allow-Origin', '*')
  // @Header('')
  @UseFilters(HttpExceptionFilter)
  testPostApis(
    @Body('name') name: string,
    @Query('names') names: string,
    @Query('id') id: string,
  ) {
    // { headers 数据
    //   host: '192.168.1.107:3335',
    //   connection: 'keep-alive',
    //   'content-length': '13',
    //   pragma: 'no-cache',
    //   'cache-control': 'no-cache',
    //   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    //   'content-type': 'application/json;charset=utf-8',
    //   accept: '*/*',
    //   origin: 'http://192.168.88.1:3333',
    //   referer: 'http://192.168.88.1:3333/',
    //   'accept-encoding': 'gzip, deflate',
    //   'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
    // }
    const responseData = {
      name,
      names,
      id,
    };
    return responseData;
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
