// optional properties

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type Heroo = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
}

let hero: Heroo = {
    name: 'THor',
    age: 36
}

function createHeroo(hero: Heroo): Heroo {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(), // nativo de la plataforma web
        name,
        age,
        isActive: true
    }
}

const thorr = createHeroo({ name: 'Thorr', age: 234 })
console.log(thorr.isActive)
//*thorr.id?.toString() // evita ejcutarlo con el optional chaning


// Templates union types 
type hexadecimalesColor = `#${string}`

// TODO: esto dara error const color: hexadecimalesColor = '0033ff' // hexadecimales
const color2: hexadecimalesColor = '#0033ff' // hexadecimales