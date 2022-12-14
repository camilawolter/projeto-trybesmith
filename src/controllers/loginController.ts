import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';

import 'express-async-errors';
import loginService from '../services/loginService';
import Infos from '../interfaces/infos';

const login = async (req: Request, res: Response) => {
  const body = req.body as Infos;

  const payload = await loginService.login(body);

  if (!payload) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };  
  return res.status(200).json(data);
};

export default {
  login,
};