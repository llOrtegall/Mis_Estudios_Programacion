import { useState, useEffect } from 'react'
import { getFactWhitWords } from '../services/facts'

export function useCatImage ({ fact }) {
  const [catImage, setCatImage] = useState()

  // TODO: Para Recuperar la imagen
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join()
    getFactWhitWords({ threeFirstWords }).then(newImage => setCatImage(newImage))
  }, [fact])

  return { catImage }
}
