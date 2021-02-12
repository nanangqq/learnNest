import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';

@Module({  // decorator,, 클래스에 함수기능 추가,,
  imports: [],
  // controllers: [AppController],
  // providers: [AppService],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
