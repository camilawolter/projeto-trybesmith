import ordersModel from '../models/ordersModel';

const getAll = async () => {
  const data = await ordersModel.getAll();
  return data;
};

export default {
  getAll,
};
