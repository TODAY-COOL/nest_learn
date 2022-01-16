import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppController, MyAppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './error/http-exception.filter';
import { BodyParserMiddleware } from './middleware/bodyParser.middleware';
import { LogMiddleware } from './middleware/log.middleware';
import { RowBodyParserMiddleware } from './middleware/rowBodyParser.middleware';
import { ValidationPipe } from './pipes/validate.pipe';

@Module({
  imports: [CatsModule],
  controllers: [AppController, MyAppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService,
  ],
  exports: [], // 由本模块提供并应在其他模块中可用的提供者的子集。
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      // .apply(RowBodyParserMiddleware)
      // .forRoutes('*')
      // .apply(BodyParserMiddleware)
      // .forRoutes('*')
      .apply(LogMiddleware)
      .forRoutes('*');
  }
  // static forRoot(entities = [], options?): DynamicModule {
  //   console.log(entities, options, '传进来的数据');
  //   return {
  //     module: AppModule,
  //     providers: [],
  //     controllers: [],
  //   };
  // }
}
