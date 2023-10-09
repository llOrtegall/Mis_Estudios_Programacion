import { useEffect, useState } from 'react'

const CAT_RAMDON_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_RAMDON_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      {fact && <p>{fact}</p>}
    </main>
  )
}
