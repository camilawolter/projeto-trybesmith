import Infos from '../interfaces/infos';
import connection from './connection';

const login = async (infos: Infos): Promise<Infos> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const values = Object.values(infos);

  const [data] = await connection.execute(query, values);
  const [user] = data as Infos[];

  return user;
};

export default {
  login,
};