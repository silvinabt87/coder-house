const { Console } = require('console')
const fs=require('fs')

const escribir =async ()=>{
  try{

    await fs.promises.writeFile('./info.txt', "TEXTO DE PRUEBA\n")
    console.log('guardado!')
  }catch(error){
    throw new Error
  }
}
escribir()