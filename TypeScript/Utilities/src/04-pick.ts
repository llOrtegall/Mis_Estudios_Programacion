interface Movie {
  title: string
  director: string
  year: number
  genre: string
  rating: number
}

type MovieBasic = Pick<Movie, 'title' | 'director'>

type MovieRating = Pick<Movie, 'rating'>

const inception: MovieBasic = {
  title: 'Inception',
  director: 'Chirtopher Nolan'
}

const movieRating: MovieRating = { rating: 8 }

const rating: Movie['rating'] = 8