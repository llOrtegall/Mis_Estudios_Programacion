import { useEffect, useState } from 'react'
import { getFactWhitWords, getRamdonFact } from './services/facts'
import './App.css'

function useCatImage ({ fact }) {
  const [catImage, setCatImage] = useState()

  // TODO: Para Recuperar la imagen
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join()
    getFactWhitWords({ threeFirstWords }).then(newImage => setCatImage(newImage))
  }, [fact])

  return { catImage }
}

export function App () {
  const [fact, setFact] = useState()
  const { catImage } = useCatImage({ fact })

  // TODO: Aquí Tenemos Un Effect
  useEffect(() => {
    getRamdonFact().then(newFact => setFact(newFact))
  }, [])

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
