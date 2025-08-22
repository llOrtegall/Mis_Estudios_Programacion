import moviesResult from "../mocks/moviesResult.json"

export function useMovies(){
  const movies = moviesResult.Search

  const mappedMovies = movies.map((m) => ({
    id: m.imdbID,
    title: m.Title,
    year: m.Year,
    image: m.Poster
  }))

  return { movies: mappedMovies }
}