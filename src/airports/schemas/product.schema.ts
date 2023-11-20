import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document

@Schema()
export class Product {

  @Prop()
  title: string

  @Prop()
  price: string

}

export const ProductSchema = SchemaFactory.createForClass(Product)