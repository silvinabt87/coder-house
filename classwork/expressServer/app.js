const express=require('express')

const app=express()
const server= app.listen(8080, ()=>console.log('listening port 8080'))

app.get('/', (req, res)=>{res.send('<h1>hola</h1>')})
app.get('/login', (req, res)=>{res.send('entra a hacer login')})
const listener=app.listen()