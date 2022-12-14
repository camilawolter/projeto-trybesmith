import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Products from '../interfaces';

const getAll = async (): Promise<Products[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute<RowDataPacket[]>(query);
  return products as Products[];
};

export default {
  getAll,
};
