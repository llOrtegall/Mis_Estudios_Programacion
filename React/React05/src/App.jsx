import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'
import { Otro } from './components/Otro'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { catImage } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
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

      <Otro />

    </main>
  )
}
