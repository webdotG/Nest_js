import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

  private products = []

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((a) => a.id === id);
  }

}