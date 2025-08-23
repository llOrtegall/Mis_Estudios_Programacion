import { searchMovies, type MappMovies } from "../services/movies"
import { useState } from "react"

export function useMovies({ search }: { search: string }) {
  const [resMovies, setResMovies] = useState<MappMovies>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getMovies = async () => {
    setLoading(true)
    try {
      const movies = await searchMovies(search)
      setResMovies(movies)
    } catch (error) {
      setError(error as string)
    } finally {
      setLoading(false)
    }
  }

  return { movies: resMovies, getMovies, loading, error }
}