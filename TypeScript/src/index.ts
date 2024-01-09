let mensaje: string = "Hola Mundo";

mensaje = "Hola Mundo con TS";

mensaje = "Chao mundo"

console.log(mensaje);
console.log(typeof []);

/**
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any
 * unknown
 * never
 * arrays
 * tuples
 * enums
 * 
 * Tips inferidos por TS
 * 
 */

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "Velociraptor";
let extintoss: boolean = true;

/** Type Script es capaz de si la variable se encuentra incilizada inferir su tipo */

let mivariable

mivariable = "hola mundo"
mivariable = 123

const config = "es correcto"

function chanchitoFeliz(config: string) {
    return config
}

chanchitoFeliz(config)

let animales: string[] = ["Leon", "Tigre", "Elefante"]
let nums: number[] = [1, 2, 3, 4, 5]
let checks: boolean[] = []
let num2: Array<number> = []

// nums.map(x => x.)

/** Type Script al tipar los datos es capaz de detectar sus metodos que se le pueden aplicar */

let tupla: [number, string[]] = [1, ['chanchito', 'feliz']]

const chica = 's'
const mediada = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande

const enum LoadingStates { Idle, Loading, Succes, Error }

const estado = LoadingStates.Succes

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id:
    number, nombre:
    string, edad?:
    number, talla: Talla,
    direccion: Direccion
}

const objecto: Persona = {
    id: 1,
    nombre: '',
    edad: 20,
    talla: Talla.Chica,
    direccion: {
        numero: 123,
        calle: 'calle falsa',
        pais: 'pais'
    }
}

console.log(objecto);