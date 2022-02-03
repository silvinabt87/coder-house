const express=require('express')
const Container = require("./Container")
const products=require("./products")
const productCreator= new Container()

//create file with products
const productCreation= async()=>{
 products.map((prod)=> productCreator.save(prod).then(result=>result).then(result=>{console.log(result); return JSON.parse(JSON.stringify(result))} ))

}

console.log("productcreation", productCreation())



const app=express()
const server= app.listen(8080, ()=>console.log('listening port 8080'))

// app.get('/products', (req, res)=>{)})
app.get('/randomProduct', (req, res)=>{res.send('entra a hacer login')})

