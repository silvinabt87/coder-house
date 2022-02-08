const Container = require('./Container');
const productCreator = new Container();

const product = {
  title: 'Item 1',
  price: 10,
  thumbnail: '/url/item2',
};

export const createProduct = productCreator.save(product).then((result) => result);
export const getAllProducts = productCreator.getAll().then((result) => result);
export const getProductByID = productCreator.getById(id).then((result) => result);
export const deleteProductByID = productCreator.deleteById(id).then((result) => result);
export const deleteAllProducts = productCreator.deleteAll().then((result) => result);
