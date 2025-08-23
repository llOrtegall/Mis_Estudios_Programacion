export interface MovieResponse {
  Search: Movie[]
  totalResults: number
  Response: boolean
}

export interface Movie {
  imdbID: string
  Title: string
  Type: string
  Year: string
  Poster: string
}