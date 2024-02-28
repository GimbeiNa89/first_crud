import { Product } from "../models/product.model";
import { IProduct } from "../types/product.type";

export const showProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

export const showProductById = async (id: string): Promise<IProduct | null> => {
  // const foundUser = await User.findById(id);
  // return foundUser as IUser; da capire percè fa funzionare
  return await Product.findById(id);
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  return await Product.create(product);
};

export const updateProductById = async (
  id: string,
  product: Partial<IProduct>
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, product, { new: true });
};

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
  // return { products } as IProduct;
};
