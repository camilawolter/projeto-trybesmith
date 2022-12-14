import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Order from '../interfaces/orders';

const getAll = async (): Promise<Order[]> => {
  const query = `SELECT o.id, o.user_id AS 'userId', JSON_ARRAYAGG(pr.id) AS 'productsIds'
  FROM Trybesmith.orders AS o
  INNER JOIN Trybesmith.products AS pr
  ON o.id = pr.order_id
  GROUP BY o.id`;

  const [orders] = await connection.execute<RowDataPacket[]>(query);
  return orders as Order[];
};

export default {
  getAll,
};