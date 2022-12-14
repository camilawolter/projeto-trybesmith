import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import 'express-async-errors';

const getAll = async (_req: Request, res: Response) => {
  const result = await ordersService.getAll();
  return res.status(200).json(result);
};

export default {
  getAll,
};