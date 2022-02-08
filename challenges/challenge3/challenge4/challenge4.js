//router y multer
const express = require('express');
const app = express();
const PORT = 8080;
const productsRoute = require('./routes/products');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const server = app.listen(PORT, () => console.log('listening port'));
app.use(express.json());
app.use('/products', productsRoute);
app.use('/products/:id', productsRoute);

app.post('/products/:id', (req, res) => {
  res.send({ message: 'ok' });
});
