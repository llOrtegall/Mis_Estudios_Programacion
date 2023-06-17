// optional properties

type Heroo = {
    readonly id?: number
    name: string;
    age: number
    isActive?: boolean;
}

let hero: Heroo = {
    name: 'THor',
    age: 36
}

function createHeroo(hero: Heroo): Heroo {
    const { name, age } = hero
    return { name, age, isActive: true }
}

const thorr = createHeroo({ name: 'Thorr', age: 234 })
console.log(thorr.isActive)
//*thorr.id?.toString() // evita ejcutarlo con el optional chaning