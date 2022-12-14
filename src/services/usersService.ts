import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import User from '../interfaces/users';
import { secret, config } from '../middlewares/jwtConfig';

const create = async (user: User) => {
  const payload = await usersModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return data;
};

export default {
  create,
};