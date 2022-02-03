const express=require('express')
const Container = require("../challenge2/challenge2")
const productCreator= new Container()
const products=
  [
 {
   "title": "Escuadra",
   "price": 123.45,
   "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",

 },
 {
   "title": "Calculadora",
   "price": 234.56,
   "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",

 },
 {
   "title": "Globo Terráqueo",
   "price": 345.67,
   "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",

 }
]

const productCreation= async()=>{
 products.map( (prod)=> productCreator.save(prod).then(result=>result).then(result=>JSON.stringify(result)))

}

console.log("productcreation", productCreation())



const app=express()
const server= app.listen(8080, ()=>console.log('listening port 8080'))

// app.get('/products', (req, res)=>{)})
app.get('/randomProduct', (req, res)=>{res.send('entra a hacer login')})

