import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const [sort, setSort] = useState(false);
  const { error, search, setSearch } = useSearch();
  const { movies, getMovies } = useMovies({ search, sort });

 const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    getMovies(search);
  }

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const newSearch = ev.target.value
    setSearch(newSearch);
  }

  const handleSortChange = () => {
    setSort(!sort);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Movie Search
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover your favorite movies and series from our extensive database
          </p>

          {/* Search Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" onSubmit={handleSubmit}>
            <div className="flex-1 w-full sm:w-auto">
              <input
                type="text"
                name="query"
                placeholder="Avengers, John Wick, ..."
                className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 shadow-sm"
                value={search}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30">
              <label htmlFor="sort" className="text-sm font-medium text-white whitespace-nowrap">
                Sort by title
              </label>
              <input
                type="checkbox"
                name="sort"
                id="sort"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                onChange={handleSortChange}
                checked={sort}
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </span>
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg backdrop-blur-sm">
              <p className="text-red-300 text-sm font-medium">{error}</p>
            </div>
          )}
        </header>

        <main className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Search Results</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <section className="min-h-[400px]">
            {movies ? (
              <Movies movies={movies} />
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-center space-y-4">
                  <svg className="w-24 h-24 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4zM6 6v12h12V6H6zm3 3a1 1 0 112 0v6a1 1 0 11-2 0V9zm4 0a1 1 0 112 0v6a1 1 0 11-2 0V9z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-300">No movies found</h3>
                  <p className="text-gray-400 max-w-md">
                    Try searching for your favorite movies or series using the search bar above
                  </p>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
