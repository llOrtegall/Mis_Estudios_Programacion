import { useEffect, useState } from "react"
import { getRandomImage } from "../services/getRandomImage"

export function useRandomImage(fact: string) {
  const [catImage, setCatImage] = useState('')
  
  useEffect(() => {
    if (!fact) return
    getRandomImage(fact)
      .then(data => setCatImage(data))
  }, [fact])

  return { catImage }
}