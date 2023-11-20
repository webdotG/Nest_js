import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Redirect,
  HttpCode,
  HttpStatus,
  Header,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  // @Get()
  // @Redirect('https://google.com', 301)             //для редиректа
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status.
  //   req.method.
  //   return 'get all airports';
  // }

  @Get()
  getAll(): string {
    return 'GET all products';
  }

  @Get(':id')
  getId(@Param('id') id: string): string {
    return 'getId ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)                   //вместо цифр можно указать статус фразой
  @Header('Cache-Control', 'none')                //для создания headera
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title : ${createProductDto.title} Price : ${createProductDto.price} `;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id;
  }


}
