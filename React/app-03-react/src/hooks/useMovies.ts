import { searchMovies, type MappMovies } from "../services/movies"
import { useRef, useState, useMemo, useCallback } from "react"

export function useMovies({ search, sort }: { search: string, sort: boolean }) {
  const [resMovies, setResMovies] = useState<MappMovies>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const previusSearh = useRef(search)

  // useCallback para evitar re-renderizados innecesarios y es especifico para funciones
  const getMovies = useCallback(async (search: string) => {
    if (search === previusSearh.current) return

    try {
      setLoading(true)
      previusSearh.current = search
      const movies = await searchMovies(search)
      setResMovies(movies)
    } catch (error) {
      setError(error as string)
    } finally {
      setLoading(false)
    }

  }, [])

  // useMemo para evitar re-renderizados innecesarios cuando el valor de sort no cambia o las movies no cambian
  const sortedMovies = useMemo(() => {
    return sort
      ? [...resMovies].sort((a, b) => a.title.localeCompare(b.title))
      : resMovies
  }, [sort, resMovies])

  return { movies: sortedMovies, getMovies, loading, error }
}
