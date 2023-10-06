const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero'
}

// Agregas Más Propiedades al Objecto

console.log(Persona);

Persona.Direcion = 'Cll 13 An # 9 - 03'

console.log(Persona)

// Eliminar Propiedades del Objecto
delete Persona.EstadoCivil

console.log(Persona);


