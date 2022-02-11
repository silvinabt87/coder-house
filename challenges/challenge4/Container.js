const fs = require('fs');

const pathToFile = '../challenge4/products.json';
class Container {
  save = async (product) => {
    if (!product.title || !product.price) {
      return { status: 'error', message: "There's not enough info to create the product" };
    }

    try {
      if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, 'utf-8');
  
        let products = JSON.parse(data);

        if (products.length > 0) {
          let id = products[products.length - 1].id + 1;
          product.id = id;
          products.push(product);
          await fs.promises.writeFile(pathToFile, JSON.stringify(products, null, 2));
          return { status: 'success', message: 'Product saved' };
        } else {
          return { status: 'error', message: 'Product list is empty' };
        }
      } else {
        product.id = 1;
        console.log("data")
        await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2));
        return { status: 'success', message: 'Product saved' };
      }
    } catch (error) {
      return { status: 'error', message: error };
    }
  };

  getAll = async () => {
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, 'utf-8');
      let products = JSON.parse(data);
      if (products.length > 0) {
        return { status: 'success', payload: products };
      } else {
        return { status: 'success', message: 'Product saved' };
      }
    } else {
      return { status: 'error', message: 'No products file found' };
    }
  };

  getById = async (id) => {
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, 'utf-8');
      let products = JSON.parse(data);
      let productFound = products.filter((product) => product.id === id);
      if (productFound.length > 0) {
        return { status: 'success', payload: productFound };
      } else {
        return { status: 'error', message: `No product found with id #${id}` };
      }
    } else {
      return { status: 'error', message: 'No products file found' };
    }
  };


  deleteById = async (id) => {
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, 'utf-8');
      let products = JSON.parse(data);
      let updatedProductsList = products.filter((product) => !product.id === id);
      await fs.promises.writeFile(pathToFile, JSON.stringify(updatedProductsList, null, 2));
      return { status: 'success', message: `Product with id # ${id} has been successfully deleted` };
    } else {
      return { status: 'error', message: 'No products file found' };
    }
  };

  deleteAll = async () => {
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, 'utf-8');
      let products = JSON.parse(data);
      if (products.length > 0) {
        let updatedProductsList = [];
        await fs.promises.writeFile(pathToFile, JSON.stringify(updatedProductsList, null, 2));
        return { status: 'success', message: `All products have been successfully deleted` };
      } else {
        return { status: 'error', message: 'Product list is empty' };
      }
    } else {
      return { status: 'error', message: 'No products file found' };
    }
  };
}

module.exports = Container;
