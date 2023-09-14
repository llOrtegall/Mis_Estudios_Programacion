import { Route, Routes } from "react-router-dom";

// TODO: Esto es un componente y Devuelven Elementos
const Home = () => <h1>Home</h1>
const SearchPage = () => <h1>Search</h1>

export function App() {
  return (
    <section>
      <header className="flex justify-between p-4 bg-blue-300">
        <h1 className="font-bold text-purple-600">App De Prueba</h1>
        <nav>
          <ul className="flex px-4">
            <li className="mx-6"><a href="/search">Search</a></li>
            <li className="mx-6"><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </section>
  )
}