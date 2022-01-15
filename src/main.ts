import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';

// import { HttpExceptionFilter } from './error/http-exception.filter';
// https://github.com/staart/api 参考代码
// https://www.jianshu.com/p/eec0586409da

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  
  // app.use(helmet())
  app.enableCors()
  await app.listen(3335);
  console.log('😆😆😆😆 serve is start');
}
bootstrap();
