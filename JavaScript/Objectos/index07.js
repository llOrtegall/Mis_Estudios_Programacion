const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero',
}

const Medidas = {
  Altura: '1.65 m',
  Peso: '68 Kg',
}

console.log(Persona);
Object.seal(Persona)

Persona.Nombre = 'Andres'
Persona.Apellido = 'Saya'

console.log(Persona);

// Clonar Dos Objects
const Resultado = Object.assign({}, Persona, Medidas);

console.log(Resultado);

// Spread Operator o Rest Operator

const Resultado2 = { ...Persona, ...Medidas }
console.log(Resultado2);

