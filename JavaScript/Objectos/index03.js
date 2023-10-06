const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero'
}

const nombre = Persona.Nombre

// Esto es igual
console.log(Persona.Nombre);
console.log(nombre);

// Destruturación de un objecto
const { Nombre, Apellido, Edad } = Persona

console.log(Nombre);
console.log(Apellido);
console.log(Edad);