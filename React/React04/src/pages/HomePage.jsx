import { Link } from "react-router-dom";

const userId = 'ivan'

export function HomePage() {
  return (
    <>
      <div>Home</div>

      <h1>Aplication</h1>

      <Link to={`/users/${userId}`}>Ir a User</Link>
    </>
  )
}