import productsModel from '../models/productsModel';

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

export default {
  getAll,
};