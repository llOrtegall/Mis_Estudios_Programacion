//* TypeScript no funciona en tiempo de ejecución <---------
//* JavaScript Funciona en tiempo de ejecución <---------


// TODO: anotaciones de types --> agregamos el tipo despues de nombrar la variable
const persona: string = 'Miguel';

const persona2 = {
    name: 'Pepe',
    age: 30
}

//*Type Script Usa inferencia es capaz de mostrarte como es el object en este ejemplo
persona2.age = 12;
persona2.name = 'Ivan'

// ? Curiosidad VS Code Esta desarrollado con TypeScript y TypeScript con TypeScript
