// TODO: Object Literal
const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero',
  Disponible: true
}

// TODO: Object Constructor

function CrearPersona(Nombre, Apellido) {
  this.Nombre = Nombre;
  this.Apellido = Apellido;
  this.Disponible = true;
}

const Persona2 = new CrearPersona('Ivan', 'Ortega')
console.log(Persona2);

const Persona3 = new CrearPersona('Andres', 'Izquierdo');
console.log(Persona3);
