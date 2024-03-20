import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Oulet = (): JSX.Element => {
  return (
    <section className='flex w-full min-h-[100vh] bg-slate-200 dark:bg-slate-700 text-black dark:text-white'>

      <NavBar />

      <main>
        <Outlet />
      </main>

    </section>
  )
}

export default Oulet
