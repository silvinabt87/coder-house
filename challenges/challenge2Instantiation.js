const Container = require("./challenge2")
const productCreator= new Container()


const product= {
  title: "Item 1",
  price: 10,
  thumbnail: "/url/item2"
}

productCreator.save(product).then(result=>console.log("save",result))
productCreator.getAll().then(result=>console.log("getAll",result))
productCreator.getById(1).then(result=>console.log("getById", result))
// productCreator.deleteById(1).then(result=>console.log("deleteById", result))
productCreator.deleteAll().then(result=>console.log("deleteAll", result))