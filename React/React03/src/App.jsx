import { Route, Routes, Link } from "react-router-dom";

// TODO: Esto es un componente y Devuelven Elementos
const Home = () => <h1>Home</h1>

const Tacos = () => <h1>Tacos</h1>

const SearchPage = () => {
  const tacos = ['Cochinita', 'Chile', 'Quesadilla', 'Carnita']
  return (
    <div className="w-screen h-screen text-center">
      <h1>Searh Page</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}>
            <Link className="mx-2" to={`/tacos/${taco}`} >{taco}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function App() {
  return (
    <>
      <header className="flex justify-between p-4 bg-blue-300">
        <h1 className="font-bold text-purple-600">Company Name</h1>
        <nav>
          <ul className="flex px-4">
            <li className="mx-6 font-semibold hover:text-yellow-200">
              <Link to="/search">Search</Link>
            </li>
            <li className="mx-6 font-semibold hover:text-yellow-200">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path="tacos/:nombre-del-taco" element={<Tacos />} />
      </Routes>
    </>
  )
}