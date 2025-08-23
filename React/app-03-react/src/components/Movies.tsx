interface Props {
  movies: {
    id: string;
    title: string;
    year: string;
    image: string;
  }[]
}

export function Movies({ movies }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}