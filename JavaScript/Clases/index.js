/**
 * Representa a una persona.
 * @constructor
 * @param {string} _nombre - El nombre de la persona.
 * @param {string} _apellido - El apellido de la persona.
 * @param {number} _edad - La edad de la persona.
 * @param {number} _id - El ID de la persona.
 */


// para crear una clase se utiliza la palabra reservada class seguida del nombre de la clase y las llaves que delimitan el cuerpo de la clase.
class Persona {
  constructor(nombre, apellido, edad, id){
    // Aquí se inicializan las propiedades de la clase
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._id = id;
  }

  // Para agregar métodos a la clase se utiliza la palabra reservada seguida del nombre del método y los paréntesis que delimitan los parámetros del método.
  get nombre(){
   return this._nombre   
  }

  set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
  }

  get apellido(){
    return this._apellido   
   }
 
   set apellido(nuevoApellido){
     this._apellido = nuevoApellido;
   }

   get edad(){
    return this._edad   
   }
 
   set edad(nuevaEdad){
     this._edad = nuevaEdad;
   }

   get id(){
    return this._id   
   }
 
   set id(nuevoId){
     this._id = nuevoId;
   }
}

class Empleado extends Persona {
  constructor(nombre, apellido, edad, id, sueldo, departamento){
    super(nombre, apellido, edad, id);
    this._sueldo = sueldo;
    this._departamento = departamento;
  }

  get sueldo(){
    return this._sueldo;
  }

  set sueldo(nuevoSueldo){
    this._sueldo = nuevoSueldo;
  }

  get departamento(){
    return this._departamento;
  }

  set departamento(nuevoDepartamento){
    this._departamente = nuevoDepartamento;
  }
}

// Para crear una instancia de la clase se utiliza la palabra reservada new seguida del nombre de la clase y los parámetros que recibe el constructor.

const persona1 = new Persona('Sebastian', 'Pérez', 30, 111811222);
const persona2 = new Persona('Daniel', 'Ortega', 32, 111811223);

const empleado1 = new Empleado('Sebastian', 'Pérez', 30, 111811222, 1000000, 'Desarrollo');

console.log(empleado1);