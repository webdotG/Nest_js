import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {
  }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  getId(@Param('id') id: string): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)                   //вместо цифр можно указать статус фразой
  @Header('Cache-Control', 'none')                //для создания headera
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
    // return `Title : ${createProductDto.title} Price : ${createProductDto.price} `;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return this.productService.update(id, updateProductDto)
  }

}

  // @Get()
  // @Redirect('https://google.com', 301)             //для редиректа
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status.
  //   req.method.
  //   return 'get all airports';
  // }