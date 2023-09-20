import { Route, Routes, Link, useParams, Outlet, Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "./NavLink.jsx";
import { useAuth } from "./useAuth.jsx";
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

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return children
}

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const handleClick = () => {
    login()
    navigate('/search')
  }
  return (
    <button onClick={handleClick}>login</button>
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
              <NavLink to="/search">Search</NavLink>
            </li>
            <li className="mx-6 hover:text-yellow-200">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search'
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          } />
        <Route path="tacos/:tacoName" element={<Tacos />} >
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}