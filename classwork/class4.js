//server in Nodemon

const { response } = require('express');
const http=require('http')

const server=http.createServer((req,res)=>{ const time= new Date().getHours()
if(time>=6 && time<=12){res.end('Buenos dias, holi')}
if(time>=13 && time<=19){res.end('Buenas tardes')}
if(time>=20 && time<=24){res.end('Buenas noches')}
 })
 
 const connectedServer=server.listen(8080,()=>{console.log("server is listening on port 8080")})
