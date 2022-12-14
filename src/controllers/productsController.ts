import { Request, Response } from 'express';
import productsService from '../services/productsService';
import 'express-async-errors';

const getAll = async (_req: Request, res: Response) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

export default {
  getAll,
};