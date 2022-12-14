import { NextFunction, Request, Response } from 'express';
import Infos from '../interfaces/infos';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as Infos;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });

  next();
};

export default {
  validateLogin,
};