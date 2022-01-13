import { Module } from '@nestjs/common';
import { AppController, MyAppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, MyAppController],
  providers: [AppService],
})
export class AppModule {}
