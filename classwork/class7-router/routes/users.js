const express=require('express')

const router=express.Router()

router.get('/', (req,res)=>res.send("hola desde users"))

router.get('/:id', (req,res)=>res.send(req.params.id))

router.post('/', (req,res)=>{console.log(req.body)})
module.exports= router