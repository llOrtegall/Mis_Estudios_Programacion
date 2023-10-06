const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero',
  informacion: {
    peso: '65 Kg',
    altura: '1.65 m'
  },
  origen: {
    pais: 'Colombia',
    departamento: 'Valle Del Cauca',
    ciudad: 'Yumbo'
  }
}

console.log(Persona);
console.log(Persona.informacion);
console.log(Persona.informacion.altura);
console.log(Persona.informacion.peso);
