const CAT_RAMDON_FACT = 'https://catfact.ninja/fact'

export const getRamdonFact = (setFact) => {
  fetch(CAT_RAMDON_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)
    })
}
