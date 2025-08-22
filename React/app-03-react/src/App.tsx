import { useEffect, useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

function useSearch(){
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const isFirtInput = useRef(true);

  useEffect(() => {
    if(isFirtInput.current){
      isFirtInput.current = search === "";
      return
    }

    if(search === "") {
      setError("Please enter a search term");
      return
    }

    if(search.match(/^\d+$/)) {
      setError("Please enter a valid search term");
      return
    }

    if(search.length < 3) {
      setError("Please enter a valid search term");
      return
    }

    setError("")
  }, [search])

  return { search, error, setSearch }
}

function App() {
  const { movies } = useMovies();
  const { error, search, setSearch } = useSearch();

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(search);
  }

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  }

  return (
    <section className="p-2 flex flex-col gap-2 items-center">
      <header>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Avengers, Jhon Wick, ..."
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="py-2 px-4 border rounded bg-blue-500 cursor-pointer hover:bg-blue-600"
          >
            Search
          </button>
        </form>
        {
          error && (
            <p className="text-red-500">{error}</p>
          )
        }
      </header>

      <main>
        <h2>Results</h2>

        <section>
          {movies.length > 0 ? (
            <Movies movies={movies} />
          ) : (
            <p>No movies found</p>
          )}
        </section>

      </main>
    </section>
  )
}

export default App
