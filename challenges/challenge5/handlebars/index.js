const template=Handlebars.compile(`<div>
  <h3>{{nombre}}</h3>
  <h3>{{apellido}}</h3>
  <h3>{{edad}}</h3>
</div>`)

const html=template({nombre: "silvina", apellido: "tamburini", edad: 10})

document.getElementById('html').innerHTML=html