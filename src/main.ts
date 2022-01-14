import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { HttpExceptionFilter } from './error/http-exception.filter';
// https://github.com/staart/api 参考代码
// https://www.jianshu.com/p/eec0586409da

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3335);
  console.log('服务已启动');
}
bootstrap();
