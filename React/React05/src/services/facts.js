const CAT_RAMDON_FACT = 'https://catfact.ninja/fact'
const ULR_IMAGEN_CAT = 'https://cataas.com/cat/says/'

export const getRamdonFact = async () => {
  const res = await fetch(CAT_RAMDON_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getFactWhitWords = async ({ threeFirstWords }) => {
  return fetch(`${ULR_IMAGEN_CAT}${threeFirstWords}?fontSize=20&fontColor=red`)
    .then(response => response)
    .then(response => {
      const { url } = response
      return (url)
    })
}

/*  export const getRamdonFact = () => {
   return fetch(CAT_RAMDON_FACT)
     .then(res => res.json())
     .then(data => {
       const { fact } = data
     return fact
    })
} */
