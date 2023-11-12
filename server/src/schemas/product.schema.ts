import { Schema, model, Document } from 'mongoose';
import { IProduct } from '../typespaces/interfaces/IProduct';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  colors: {
    type: [String],
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
});

export const ProductModel = model<IProduct & Document>(
  'Product',
  productSchema,
);
