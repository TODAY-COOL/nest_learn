import {
  Controller,
  Get,
  Post,
  Header,
  Req,
  Query,
  Param,
  Body,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { query, Request } from 'express';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './error/http-exception.filter';
import { ValidationPipe } from './pipes/validate.pipe';
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
  @UseFilters(HttpExceptionFilter)
  testPostApis(@Body() body, @Query() query, @Param() params, @Req() req: Request) {
    console.log(body, query, params, req.route.path, '=======>>>数据');
    const responseData = {
      path: req.route.path,
      body,
      query,
      params,
    }
    return responseData
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
