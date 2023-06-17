//* any = Cualquier tipo de dato 
//* en realidad lo que estamos diciendo es ignorar el type de dato

let anyValue: any = 'hola';

const a = 1;
const b = 2;
const c = a + b;

let obj: any = { x: 0 }

function saludar(name: string) {
    console.log(`Hola ${name}`)
}
saludar('pepe');
// * saludar(2);

function saludar2({ name, age }: { name: string, age: number }) {
    console.log(`Hola ${name}, tienes ${age} años`)
}

saludar2({ name: 'Ivan', age: 22 })

function saludar3(persona: { name: string, age: number }) {
    const { name, age } = persona
    console.log(`Hola ${name} tienes ${age} años`)
}

saludar3({ name: 'Andres', age: 22 })

function saludar4({ name, age }: { name: string, age: number }): number {
    console.log(`Hola ${name} tienes ${age} años`)
    return age
}

let username: string;
// * username = saludar4({ name: 'Andres', age: 22 });

const sayHiProgram = (fn: (name: string) => void) => {
    fn('Ivan')
}

const sayHi = (name: string) => {
    console.log(`Hi ${name}`)
    // * return name
}

sayHiProgram(sayHi)