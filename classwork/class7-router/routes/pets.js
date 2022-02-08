const express=require('express')

const router=express.Router()
let pets= []

router.get('/', (req,res)=>res.send("hola desde PETS"))

router.post('/', (req,res)=>{let pet= req.body;
let petarray= pets.push(pet)
console.log(petarray)
res.send(petarray)
})
module.exports= router