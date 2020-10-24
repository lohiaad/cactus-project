import { Module } from '@nestjs/common';
import { NestCrawlerModule } from 'nest-crawler';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NestCrawlerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
