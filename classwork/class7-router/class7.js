//router y multer
const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8080;
const usersRoutes = require('./routes/users');
const petsRoutes = require('./routes/pets');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
let uploader = multer({ storage });
const server = app.listen(PORT, () => console.log('listening port'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'public'));
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/pets', petsRoutes);

app.post('/upload', uploader.single(''), (req, res) => {
  res.send({ message: 'ok' });
});
