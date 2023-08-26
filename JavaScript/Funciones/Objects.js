//para crear un objecto se utiliza la sigueinte sintaxis
const object = {
    // propiedaddes y valor == key y value
    nombre: 'Ivan',
    apellido: 'Ortega',
    edad: 32,
    estadoCivil: 'Soltero',
    hijo: {
        nombre: 'Juan',
        apellido: 'Ortega',
    }
}

const div = document.getElementById('render')
const div2 = document.getElementById('render2')

div.innerHTML = `
    <p>Nombre: ${object.nombre}</p>
    <p>Apellido: ${object.apellido}</p>
    <p>Edad: ${object.edad}</p>
    <p>Estado Civil: ${object.estadoCivil}</p>
    <p>Hijo: ${object.hijo.nombre} ${object.hijo.apellido}</p>
`

div2.innerHTML = `
    <p>Nombre: ${object['nombre']}</p>
    <p>Apellido: ${object['apellido']}</p>
    <p>Edad: ${object['edad']}</p>
    <p>Estado Civil: ${object['estadoCivil']}</p>
    <p>Hijo: ${object['hijo']['nombre']} ${object['hijo']['apellido']}</p>
    `


// contructores en JavaSCript
function Persona(nombre, apellido, edad, estadoCivil) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estadoCivil = estadoCivil;

    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

const persona1 = new Persona('Ivan', 'Ortega', 32, 'Soltero');
const persona2 = new Persona('Daniel', 'Ortega', 32, 'Soltero');

console.log(persona1.nombreCompleto());
console.log(persona2);

let miObjecto = new Object();
let miObjecto2 = {}; 

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArray1 = new Array();
let miArray2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function(){};