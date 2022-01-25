class Usuario {
  constructor(nombre = '', apellido = '', libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `Nombre del usuario: ${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
    return `Mascotas nombre: ${this.mascotas}`;
  }
  countMascotas() {
    return `Mascotas numero: ${this.mascotas.length}`;
  }

  addBook(title, author) {
    this.libros.push({ title, author });
    return this.libros;
  }

  getBookNames() {
    return this.libros.map((element) => element.title);
  }
}

const usuario1 = new Usuario(
  'Silvina',
  'Tamburini',
  [{ title: 'libro uno', author: 'author1' }],
  ['Woody', 'Mora', 'Sheli']
);
console.log('RESULTADO DE GETFULLNAME:', usuario1.getFullName());
console.log('RESULTADO DE ADDMASCOTA:', usuario1.addMascota('Olivia'));
console.log('RESULTADO DE COUNTMASCOTAS:', usuario1.countMascotas());
console.log('RESULTADO DE ADDBOOK:', usuario1.addBook('Miau', 'señor miau'));
console.log('RESULTADO DE GETBOOKNAMES:', usuario1.getBookNames());
