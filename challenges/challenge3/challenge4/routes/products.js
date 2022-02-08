const express=require('express')
const router=express.Router()
const ProductCreator=require('ProductCreator')

router.get('/', (req,res)=>{
  const allProducts=await ProductCreator.getAllProducts()
  res.send(allProducts)})

router.post('/', async (req,res)=>{ const newProduct= await ProductCreator.createProduct(req.body)})

module.exports= router