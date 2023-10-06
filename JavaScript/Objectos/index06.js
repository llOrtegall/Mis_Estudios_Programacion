const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero'
}

// Congela el Object no dejará eliminar ni agregar propiedades al mismo
Object.freeze(Persona)
