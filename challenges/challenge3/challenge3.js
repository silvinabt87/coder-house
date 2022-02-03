const express = require('express');
const Container = require('./Container');
const products = require('./products');
const productCreator = new Container();

//create file with products--> to be fixed-- promise doesn't resolve and file is not populated
// const productCreation = async () => {
//   products.map((prod) =>
//     productCreator
//       .save(prod)
//       .then((result) => result)
//       .then((result) => {
//         console.log(JSON.stringify(result));
//       })
//   );
// };

// console.log('productcreation', productCreation());
const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = express();
const server = app.listen(8080, () => console.log('listening port 8080'));

app.get('/products', async (req, res) => {
  let products = await productCreator.getAll();
  res.send(products);
});
app.get('/randomProduct', async (req, res) => {
  let products = await productCreator.getAll();
  let max = products.payload.length + 1;
  let min = 1;

  const idToBeFetched = getRandomArbitrary(min, max);
  const productFetched = await productCreator.getById(idToBeFetched);
  res.send(productFetched.payload);
});
