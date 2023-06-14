function suma(a: number, b: number) {
  return a + b
}

type Hero = {
  readonly id: number;
  name: string;
  age: number;
  isActive: boolean;
}

const hero: Hero = {
  id: 1,
  name: 'Ivan Ortega',
  age: 36,
  isActive: false,
}
//* hero.id = 2; no se puede es tipo readonly

function crateHero(hero: Hero): Hero {

  const { name, age } = hero;

  return {
    id: 2, //*crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}
//* arrays necesitan su type
const lenguages: string[] = [];

lenguages.push('typeScritp');

const board: string[][] = [
  ['x', 'y',],
  ['x', 'o',],
  ['o', 'y',],
];

const board2: Array<string> = [];

//* tupples
type CellValue = 'X' | 'O' | '';

type RGB = readonly [number, number, number]; //* para evitar errores agregamos readonly
const black: RGB = [0, 0, 0];
const white: RGB = [255, 255, 255];

//* Enums

// const ERROR_TYPES = {
//   NOT_FOUND: 'Not Found',
//   NOT_AUTO_EXIST: 'No se encuentra el recurso',
// }
// function mostrarMensaje(tipoDeError) {
//   if (tipoDeError === NOT_FOUND) {
//     console.log('No se encuentra el recurso')
//   } else if (tipoDeError === NOT_AUTO_EXIST) {
//     console.log('Error: ')
//   } else if (tipoDeError === 'noautorizado') {
//     console.log('No se encuentra')
//   }
// }

//* es buena practica estos enums hacerlos const sin embargo depende de la funcionalidad
const enum ERROR_TYPES {
  NOT_FOUND = 'not_found',
  UNAVAILABLE = 'unatorized',
  FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) {
    console.log('1')
  } else if (tipoError === ERROR_TYPES.UNAVAILABLE) {
    console.log('2')
  } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
    console.log('3')
  }
}