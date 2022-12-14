import { Request, Response } from 'express';
import productsService from '../services/productsService';
import 'express-async-errors';
import Products from '../interfaces';

const getAll = async (_req: Request, res: Response) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

const create = async (req: Request, res: Response) => {
  const product = req.body as Products;
  const newProduct = await productsService.create(product);
  return res.status(201).json(newProduct);
};

export default {
  getAll,
  create,
};