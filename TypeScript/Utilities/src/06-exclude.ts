type Characters = "Iron Man" | "Thor" | "Loki" | "Hulk" | "Thanos"

type Avengers = Exclude<Characters, "Loki" | "Thanos">
type Villain = Exclude<Characters, Avengers>

const hero: Characters = "Thor"
const villain: Characters = "Thanos"

const heros: Avengers[] = ["Hulk", "Iron Man"]
const villains: Villain[] = ["Loki", "Thanos"]