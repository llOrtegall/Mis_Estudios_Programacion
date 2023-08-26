function Persona (nombre, apellido, edad, estadoCivil) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estadoCivil = estadoCivil;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '1234567890';

let persona1 = new Persona('Ivan', 'Ortega', 32, 'Soltero');
let persona2 = new Persona('Daniel', 'Ortega', 32, 'Soltero');

persona1.tel = '0987654321';

console.log(persona1);
console.log(persona2);
