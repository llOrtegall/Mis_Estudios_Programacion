import { useEffect, useState } from 'react'

const CAT_RAMDON_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    fetch(CAT_RAMDON_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join()

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&fontColor=red`)
          .then(response => response)
          .then(response => {
            const { url } = response
            setCatImage(url)
          })
      })
  }, [])

  return (
    <main>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} alt={`image cat says words ${fact}`} />}
    </main>
  )
}
