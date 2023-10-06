const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero',
  Informacion: {
    peso: '65 Kg',
    altura: '1.65 m',
    Origen: {
      pais: 'Colombia',
      departamento: 'Valle Del Cauca',
      ciudad: 'Yumbo'
    }
  }

}

const { Nombre, Informacion: { peso, altura } } = Persona
const { Informacion: { Origen } } = Persona
console.log(Nombre);
console.log(peso);
console.log(altura);
console.log(Origen);

