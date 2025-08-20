type Pokemon =
  | { kind: "pikachu", thunderLevel: number }
  | { kind: "charmander", fireLevel: number }
  | { kind: "bulbasaur", grassLevel: number }
  | { kind: "eevee", waterLevel: number }
  | { kind: "jigglypuff", waterLevel: number }
  | { kind: "snorlax", fireLevel: number }
  | { kind: "mewtwo", waterLevel: number }

type PokemonWater = Extract<Pokemon, { waterLevel: number }>

const waterPokemon: PokemonWater = { kind: "eevee", waterLevel: 10 }

console.log(waterPokemon);
