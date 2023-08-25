//para crear un objecto se utiliza la sigueinte sintaxis
const object = {
    // propiedaddes y valor === key y value
    nombre: 'Ivan',
    apellido: 'Ortega',
    edad: 32,
    estadoCivil: 'Soltero',
    hijo: {
        nombre: 'Juan',
        apellido: 'Ortega',
    }
}

object.id = 1;

console.log(object);
console.log(object.nombre);
console.log(object.apellido);
console.log(object.estadoCivil);
console.log(object.id);
console.log(object.hijo.nombre);



