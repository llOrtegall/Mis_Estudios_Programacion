import { Route, Routes, Link } from "react-router-dom";

// TODO: Esto es un componente y Devuelven Elementos
const Home = () => <h1>Home</h1>
const SearchPage = () => <h1>Search</h1>

export function App() {
  return (
    <>
      <header className="flex justify-between p-4 bg-blue-300">
        <h1 className="font-bold text-purple-600">App De Prueba</h1>
        <nav>
          <ul className="flex px-4">
            <li className="mx-6"><Link to="/search">Search</Link></li>
            <li className="mx-6"><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  )
}