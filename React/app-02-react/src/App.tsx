import { useRandomImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

function App() {
  const { fact, handleClick } = useCatFact()
  const { catImage } = useRandomImage(fact)

  return (
    <main className="flex flex-col items-center">
      <h1>App De Gatitos</h1>

      <button
        onClick={handleClick}
        className="bg-yellow-500 text-black p-2 rounded-md cursor-pointer hover:bg-yellow-300"
      >
        Get New Fact
      </button>
      {fact && <h1 className="font-bold text-blue-300">{fact}</h1>}
      {catImage && <img src={catImage} alt="Cat random image" sizes="80" />}
    </main>
  )
}

export default App
