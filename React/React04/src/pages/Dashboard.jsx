import { useNavigate, Route, Routes, Link } from "react-router-dom";

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

      <Link to="welcome">
        say welcome
      </Link>

      <Routes>
        <Route path="welcome" element={<h1>Welcome</h1>} />
      </Routes>

    </>
  )
}