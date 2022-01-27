const moment=require('moment')

let today = moment()

let birthDate= moment('1987-11-30')

console.log(`hoy es ${today.format('DD/MM/YYYY')}`)
console.log(`desde que naci pasaron ${today.diff(birthDate, 'days')} dias`)
console.log(`desde que naci pasaron ${today.diff(birthDate, 'years')} años`)
console.log(`desde que naci pasaron ${today.diff(birthDate, 'minutes')} minutos`)