import { Navigate, Outlet } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

interface Props {
  redirectTo: string
  isAllowed: boolean
}

const ProtectedRoute = ({ isAllowed, redirectTo = '/' }: Props): JSX.Element => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      <section className='w-full'>
        <NavBar />
      </section>
      <section className='h-auto overflow-auto'>
        <Outlet />
      </section>
    </>
  )
}

export default ProtectedRoute
