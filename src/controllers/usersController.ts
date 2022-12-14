import { Request, Response } from 'express';
import usersService from '../services/usersService';
import 'express-async-errors';
import User from '../interfaces/users';

const create = async (req: Request, res: Response) => {
  const user = req.body as User;
  const newUser = await usersService.create(user);
  return res.status(201).json(newUser);
};

export default {
  create,
};