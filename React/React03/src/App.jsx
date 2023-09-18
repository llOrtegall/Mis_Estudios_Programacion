import { Route, Routes, Link, useParams, Outlet, NavLink } from "react-router-dom";

// TODO: Esto es un componente y Devuelven Elementos
const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = ['Cochinita', 'Chile', 'Quesadilla', 'Carnita']
  return (
    <div className="w-auto h-auto text-center">
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

const Tacos = () => {
  const { tacoName } = useParams()
  return (
    <div>
      <h1>{tacoName}</h1>
      <Link to='details' >Ir A los Detalles</Link>
      <Outlet />
    </div>
  )
}

const TacoDetails = () => {
  const { tacoName } = useParams()
  return (
    <h1>Taco Details del {tacoName}</h1>
  )
}
export function App() {
  return (
    <>
      <header className="flex justify-between p-4 bg-blue-300">
        <h1 className="font-bold text-purple-600">Company Name</h1>
        <nav>
          <ul className="flex px-4">
            <li className="mx-6 hover:text-yellow-200">
              <NavLink className={({ isActive }) => {
                return isActive ? 'is-active' : undefined
              }} to="/search">Search</NavLink>
            </li>
            <li className="mx-6 hover:text-yellow-200">
              <NavLink className={({ isActive }) => {
                return isActive ? 'is-active' : undefined
              }} to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path="tacos/:tacoName" element={<Tacos />} >
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}