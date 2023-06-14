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

