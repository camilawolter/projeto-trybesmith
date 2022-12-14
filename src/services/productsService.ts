import productsModel from '../models/productsModel';
import Products from '../interfaces';

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

const create = async (product: Products) => {
  const newProduct = await productsModel.create(product);
  return newProduct;
};

export default {
  getAll,
  create,
};