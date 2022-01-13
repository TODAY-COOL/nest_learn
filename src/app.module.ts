import { Module } from '@nestjs/common';
import { AppController, MyAppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, MyAppController],
  providers: [AppService],
  exports: [], // 由本模块提供并应在其他模块中可用的提供者的子集。
})
export class AppModule {}
