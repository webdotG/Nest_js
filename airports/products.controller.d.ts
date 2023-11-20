import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getAll(): Promise<Product[]>;
    getId(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    update(updateProductDto: UpdateProductDto, id: string): Promise<Product>;
}
