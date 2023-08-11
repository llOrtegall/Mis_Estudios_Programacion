import { Route, Routes } from "react-router-dom";

// TODO: Esto es un componente y Devuelven Elementos
const Home = () => <h1>Home</h1>
const SearchPage = () => <h1>Search</h1>



export function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </section>
  )
}