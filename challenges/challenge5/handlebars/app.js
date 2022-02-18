// const express=require('express')
// const app= express()
// const handlebars=require('express-handlebars')
// const server= app.listen(8080, ()=>console.log('hola'))

// app.engine('handlebars', handlebars.engine())
// app.set('views', '.views')
// app.set('view engine', 'handlebars')

// app.get('/', (req,res)=>{
//   res.render('home')})

const express=require('express')
const router=express.Router()
const ProductCreator=require('ProductCreator')

//get all products
router.get('/', async (req,res)=>{
  const allProducts=await ProductCreator.getAllProducts()
  res.send(allProducts)})

  //get product by id
  router.get('/', async (req,res)=>{
  const product=await ProductCreator.getProductByID(req.id)
  res.send(product)})

//create a product
router.post('/', async (req,res)=>{ 
  const newProduct= await ProductCreator.createProduct(req.body)
res.send(newProduct)

})

//delete a product
router.delete('/', async (req,res)=>{  await ProductCreator.deleteProductById(req.id)
const productsList= await ProductCreator.getAllProducts()
res.send(productsList)
})



module.exports= router