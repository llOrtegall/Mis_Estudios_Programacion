import { useRoutes, Link } from "react-router-dom"

const routes = [
  {
    path: '/',
    element: (
      <div>
        <h2>HOME</h2>
        <Link to='/search' >Go to home</Link>
      </div>
    )
  },
  {
    path: '/search',
    element: (
      <div>
        <h2>SEARCH</h2>
        <Link to='/' >Go to home</Link>
      </div>
    )
  }
]

export function App() {

  const element = useRoutes(routes)

  return (
    <main>
      <header>
        <h1>Ortega</h1>
      </header>
      {element}
    </main>
  )
}