const express=require('express')
const fs=require('fs')
const app= express()
const server= app.listen(8080, ()=>console.log('hola'))

app.engine('cte', (filePath, objectToReplace,callback)=>{
  fs.readFile(filePath,(err,content)=>{
    if(err) return callback(new Error(err))
    const template=content.toString().replace("^^title$$", ''+objectToReplace.title).replace("^^message$$", ''+objectToReplace.message)
    return callback(null,template)
     })
})

app.set('views', './views')
app.set('view engine', 'cte')
app.get('/', (req,res)=>{
  res.render('bienvenida', {
    title: "Plantilla propia",
    message: "hla plantilla"
  })
})