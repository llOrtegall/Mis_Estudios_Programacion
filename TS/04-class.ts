function logMessage(message: string): void {
    console.log(message);
}

// * inferencia funciones anonimas segun contexto
const avengers = ['spiderMan', 'Hulk', 'IronMan']

avengers.forEach(a => {
    console.log(a.toLocaleUpperCase())
})

let hero = {
    name: 'Thor',
    age: 1500
};

function createHero(name: string, age: number) {
    return { name, age };
}

const thor = createHero('Hulk', 2312);