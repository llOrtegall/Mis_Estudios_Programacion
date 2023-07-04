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

const {nombre, apellido, edad} = object;

console.log(nombre);
console.log(apellido);
console.log(edad);


