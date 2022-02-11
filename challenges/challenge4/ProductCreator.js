const Container = require('./Container');
const productCreator = new Container();

const product = {
  title: 'Item 1',
  price: 10,
  thumbnail: '/url/item2',
};

class ProductCreator {
  createProduct = async()=> await productCreator.save(product).then((result) => result);
  getAllProducts = async()=> await productCreator.getAll().then((result) => result);
  getProductByID = async()=> await productCreator.getById(id).then((result) => result);
  deleteProductByID = async()=> await productCreator.deleteById(id).then((result) => result);
  deleteAllProducts = async()=> await productCreator.deleteAll().then((result) => result);}

 module.exports=ProductCreator