import { useEffect, useState } from 'react'
import { getRamdonFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

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
