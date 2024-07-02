const Persona = {
  name: 'Juan',
  age: 30,
  isDeveloper: true
}

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPoweScale = 'weak' | 'normal' | 'strong' | 'super' | 'god'

type Hero = {
  readonly id?: HeroId,
  name: string,
  power: HeroPoweScale
  isActivate?: boolean
}

let hero: Hero = {
  name: 'Superman',
  power: 'super'
}

function createHero (hero: Hero): Hero {
  const { name, power } = hero
  return {
    id: crypto.randomUUID(),
    name,
    power,
    isActivate: true
  }
}