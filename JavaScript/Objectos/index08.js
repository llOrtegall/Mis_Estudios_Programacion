const Persona = {
  Nombre: 'Ivan',
  Apellido: 'Ortega',
  Edad: 24,
  EstadoCivil: 'Soltero',
  MostrarInfo: function () {
    console.log(`La persona Es: ${this.Nombre} y su apellido Es: ${this.Apellido} Su edad Es: ${this.Edad}`)
  }
}

Persona.MostrarInfo()

