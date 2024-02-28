import mongoose from "mongoose";
import { IProduct } from "../types/product.type";

export const productSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
