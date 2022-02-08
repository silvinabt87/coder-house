const express=require('express')
const app= express()
const handlebars=require('express-handlebars')
const server= app.listen(8080, ()=>console.log('hola'))

app.engine('handlebars', handlebars.engine())
app.set('views', '.views')
app.set('view engine', 'handlebars')

app.get('/', (req,res)=>{
  res.render('home')})