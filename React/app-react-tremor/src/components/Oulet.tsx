import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Oulet = (): JSX.Element => {
  return (
    <section className='relative bg-slate-200 dark:bg-slate-700 text-black dark:text-white'>

      <nav className='fixed top-0 left-0 h-[15vh] w-full bg-slate-200 dark:bg-slate-900 z-10'>
        <NavBar />
      </nav>

      <main className='pt-[15vh] min-h-screen overflow-auto'>
        <Outlet />
      </main>

    </section>
  )
}

export default Oulet
