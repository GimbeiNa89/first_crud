import { Request, Response } from "express";
import { products } from "../data/product.data";

import {
  createProduct,
  showProductById,
  showProducts,
  updateProductById,
  deleteProduct,
} from "../services/products.service";
// import { v4 as uuidv4 } from "uuid"; non l'ho utilizzato ma è un modo valido per aggiungere un numero casuale

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await showProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "collection empty", error: error });
    message: error;
  }
};

export const addProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(200).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateProductHandler = async (req: Request, res: Response) => {
  const newProduct = await updateProductById(req.params.id, req.body);
  try {
    res.status(200).json({
      message: "User successfully modified",
      newProduct,
    });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
    // res.status(400).json({ message: "Server problem" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // console.log('req.body', req.body);
    // console.log('req.headers', req.headers); per trovare i parametri di request da parte dell'utente (serve per autenticazione)
    const productFound = await showProductById(id);
    if (productFound) {
      res
        .status(200)
        .json({ message: "User found successfully", productFound });
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    if (error instanceof Error) {
      // modo per intercettare un nuovo errore visto che il null era contemplato.
      res.status(404).json({ message: "User not found" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProductbyId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // const id = +req.params.id;
    const userFound = await deleteProduct(id);
    res.status(200).json({
      message: "User deleted successfully",
      product: products[products.length],
    });
  } catch (error) {
    res.status(400).json({ message: "Product not found" });
    throw new Error("Product not found");
  }
};
