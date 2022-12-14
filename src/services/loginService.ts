// import jwt from 'jsonwebtoken';
import loginModel from '../models/loginModel';
import Infos from '../interfaces/infos';
// import { secret, config } from '../middlewares/jwtConfig';

const login = async (infos: Infos) => {
  const result = await loginModel.login(infos);
  return result;
};

export default {
  login,  
};