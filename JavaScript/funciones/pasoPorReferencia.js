const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    sexo: 'M'
}

function cambiarValorObjecto(p1) {
    p1.nombre = 'Carlos';
}

cambiarValorObjecto(persona);

console.log(persona);
