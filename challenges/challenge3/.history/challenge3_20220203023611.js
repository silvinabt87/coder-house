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

const app = express();
const server = app.listen(8080, () => console.log('listening port 8080'));

app.get('/products', async (req, res)=>{let products= await productCreator.getAll(); res.send(products)})
app.get('/randomProduct', (req, res) => {
  let products= await productCreator.getAll()
  let max=products.length
  console.log(max)

});
