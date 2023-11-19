import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportsController } from './airports/airports.controller';

@Module({
  imports: [],
  controllers: [AppController, AirportsController],
  providers: [AppService],
})
export class AppModule {}
