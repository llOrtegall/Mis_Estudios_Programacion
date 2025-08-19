interface Avenger {
  name: string
  power: number
  weapon?: string
  alive: boolean
}

type AvengerWhitOutSpoiler = Omit<Avenger, 'alive'>

type AvengerBasic = Omit<Avenger, 'weapon' | 'alive'>

const ironMan: AvengerWhitOutSpoiler = {
  name: 'Iron Man',
  power: 900,
  weapon: 'Millonario genio',
  // alive: false <--- no es necesario ya que se omite en la linea 8 
}

const blakPanter: AvengerBasic = {
  name: "no remenber",
  power: 1200
}