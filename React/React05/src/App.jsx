import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem impsun cat fact watjever')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => console.log(res))
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>{fact}</h1>
    </main>
  )
}
