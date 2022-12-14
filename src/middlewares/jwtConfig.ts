import 'dotenv/config';

export const secret = process.env.JWT_SECRET || 'secret';

export const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};