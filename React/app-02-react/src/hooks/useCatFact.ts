import { useEffect, useState } from "react"
import { getRandomFact } from "../services/getRandomCat"

export function useCatFact() {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getRandomFact().then(data => setFact(data))
  }

  useEffect(() => {
    refreshFact()
  }, [])

  const handleClick = () => refreshFact()

  return { fact, handleClick }
}