import { useNavigate, Link, Outlet } from "react-router-dom";

export function Dashboard() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={handleClick}>
        LogOut
      </button>

      <br />

      <Link to="welcome">
        say welcome
      </Link>

      <br />

      <Link to="goodbye">
        say goodbye
      </Link>

      <Outlet />
    </>
  )
}