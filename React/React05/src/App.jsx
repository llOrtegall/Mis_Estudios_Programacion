import { useEffect, useState } from 'react'

import './App.css'
import { getRamdonFact } from './services/facts'

export function App () {
  const [fact, setFact] = useState()
  const [catImage, setCatImage] = useState()

  // TODO: Aquí Tenemos Un Effect
  useEffect(() => {
    getRamdonFact().then(setFact)
  }, [])

  // TODO: Para Recuperar la imagen
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join()

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&fontColor=red`)
      .then(response => response)
      .then(response => {
        const { url } = response
        setCatImage(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRamdonFact()
    setFact(newFact)
  }

  return (
    <main>
      <h2>App De Gatitos</h2>
      <button onClick={handleClick}>
        Refrescar Gatito
      </button>
      <section>
        {fact && <p>{fact}</p>}
        {catImage && <img src={catImage} alt={`image cat says words ${fact}`} />}
      </section>
    </main>
  )
}
