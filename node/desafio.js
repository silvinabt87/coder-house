// let obj={}
// for (let i=0; i<10000; i++){
// let random= Math.floor(Math.random()*20+1)
// if (obj[random]){ 
//   obj[random]++
// }else{

//   obj[random]=1
// }
  
// }

// console.log(obj)

// let sum= Object.values(obj).reduce((acc,current)=>acc+current)

// console.log(sum)

const products = [
    { id:1, name:'Escuadra', price:323.45 },
    { id:2, name:'Calculadora', price:234.56 },
    { id:3, name:'Globo Terráqueo', price:45.67 },
    { id:4, name:'Paleta Pintura', price:456.78 },
    { id:5, name:'Reloj', price:67.89 },
    { id:6, name:'Agenda', price:78.90 }
]

let names=products.map((obj)=>obj.name).join(', ')

let total=products.reduce((acc,newObject)=>acc+newObject.price,0)

let avg=total/products.length

let min=products[0].price
let max=products[0].price

products.forEach(product=>{
  if(product.price<min){
    min=product.price
  }
  if(product.price>max){
    max=product.price
  }
})


let sendObject={
  names:names,
  total:total,
  avg: avg,
  min:min,
  max:max
}

console.log(sendObject)