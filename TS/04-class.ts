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


//TODO: los types se crean con pascal Case
type Hero = {
    name: string,
    age: number
}

let hero2: Hero = {
    name: 'Thor',
    age: 1500,

};

function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return { name, age, };
}

const Thor = createHero({ name: 'Thor', age: 22 });
