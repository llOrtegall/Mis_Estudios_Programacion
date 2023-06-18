// // Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HerroPoweScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// // let a: number | string
// // a = 1 a = 'Hola'

// type Heerro = {
//     readonly id?: HeroId
//     name: string
//     age: number,
//     isActive?: boolean
//     powerScale?: HerroPoweScale
// }

// let heerro: Heerro = {
//     name: 'Thor',
//     age: 36
// }

// function createHerro4(heerro: Heerro): Heerro {
//     const { name, age } = heerro
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true,
//     }
// }

// const thor5 = createHerro4({ name: 'Thor', age: 36 })
// thor5.powerScale = "multiversal"

// Types Index
// type HeroProperties = {
//     isActive: boolean,
//     adress: {
//         planet: string,
//         city: string
//     }
// }

// const addresHero: HeroProperties['adress'] = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

//Type from value
// const address = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

// type Address = typeof address

// const AddresTwich: Address = {
//     planet: 'Mars',
//     city: 'Madrid'
// }

// type of funtion return
function createAddress() {
    return {
        planet: 'Tierra',
        city: 'Barcelona'
    }
}

type Address = ReturnType<typeof createAddress>