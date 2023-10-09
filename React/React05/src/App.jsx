import { useEffect, useState } from 'react'

const CAT_RAMDON_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_RAMDON_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const theerfirtsWords = fact.split(' ', 3).join()
        console.log(theerfirtsWords)

        fetch(`https://cataas.com/cat/says/${theerfirtsWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            console.log(response)
          })
      })
  }, [])

  return (
    <main>
      {fact && <p>{fact}</p>}
    </main>
  )
}
