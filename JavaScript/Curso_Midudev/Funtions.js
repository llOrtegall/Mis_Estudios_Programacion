function saludar() {
    console.log('Hola Ivan');
}

saludar()

function suma() {
    return 1 + 1
}

suma()

function getRamdom() {
    const random = Math.random()

    const multiplied = random * 10

    const rounded = Math.floor(multiplied)

    const result = rounded + 1

    return result
}

function saludar2(nombre, apellido) {
    return console.log(`Hola ${nombre}, ${apellido}`);
}

saludar2('Ivan', 'Ortega')
