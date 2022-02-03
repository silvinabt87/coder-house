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
const getRandomArbitrary=(min, max)=> {
  return Math.random() * (max - min) + min;
}

const app = express();
const server = app.listen(8080, () => console.log('listening port 8080'));

app.get('/products', async (req, res)=>{let products= await productCreator.getAll(); res.send(products)})
app.get('/randomProduct', async (req, res) => {
  let products= await productCreator.getAll()
  let max=products.payload.length
let min=1

const gat= getRandomArbitrary(min,max)
console.log(gat)
});
