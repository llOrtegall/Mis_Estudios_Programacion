const CAT_ENDPOINT_RAMDON_FACT = 'https://catfact.ninja/fact'

interface CatFactI {
  fact: string
  length: number
}

export async function getRandomFact() {
  try {
    const res = await fetch(CAT_ENDPOINT_RAMDON_FACT)
    const json: CatFactI = await res.json()
    return json.fact
  } catch (error) {
    console.log(error);
    throw new Error('Error on fetch a cat fact')
  }
}