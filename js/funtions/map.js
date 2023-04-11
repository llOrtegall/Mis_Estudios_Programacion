const datos = [
    {
        nombre: 'Ivan',
        apellido: 'Ortega',
        edad: 20,
    },
    {
        nombre: 'sebastian',
        apellido: 'casemiro',
        edad: 45,
    },
    {
        nombre: 'Andres',
        apellido: 'Muñoz',
        edad: 24,
    },
    {
        nombre: 'Carlos',
        apellido: 'Gomez',
        edad: 67,
    },
];

datos.forEach( item => {
    console.log(item); 
    
})

/* En lo posible map es mas rapido en su ejecución */
datos.map(item => {
    console.log(item.nombre);
    
})