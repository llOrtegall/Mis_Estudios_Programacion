// Union Types

type HerroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPoweScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// let a: number | string
// a = 1 a = 'Hola'

type Heero = {
    readonly id?: HerroId
    name: string
    age: number,
    isActive?: boolean
    powerScale?: HeroPoweScale
}

let heero: Heero = {
    name: 'Thor',
    age: 36
}

function createHero4(heero: Heero): Heero {
    const { name, age } = heero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true,
    }
}

const thor4 = createHero4({ name: 'Thor', age: 36 })
thor4.powerScale = "multiversal"
