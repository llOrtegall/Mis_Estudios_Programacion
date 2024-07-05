import { NavBar } from '../components/NavBar'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Root () {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Root
