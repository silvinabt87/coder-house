const express=require('express')
const app= express()
const server= app.listen(8080, ()=>console.log('hola'))

app.use(express.static('public'))