import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './airports/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot("mongodb+srv://webdotg:zxcasdqwe321zxc@first.v5ufhia.mongodb.net/productbox?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
