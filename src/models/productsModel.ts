import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import Products from '../interfaces/products';

const getAll = async (): Promise<Products[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute<RowDataPacket[]>(query);
  return products as Products[];
};

const create = async (product: Products): Promise<Products> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Products = { id, name, amount };
  return newProduct;
};

export default {
  getAll,
  create,
};
