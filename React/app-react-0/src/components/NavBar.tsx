import { NavLink } from 'react-router-dom'

const NavBar = (): JSX.Element => {
  return (
    <nav className='bg-slate-600 text-white font-semibold px-2 py-4 flex justify-around'>
      <figure className='flex items-center gap-2'>
        <img src="/vite.svg" alt="React Logo" width={40} />
        <span>React App</span>
      </figure>
      <ul className='flex gap-2 items-center'>
        <li className='hover:text-yellow-400'>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className='hover:text-yellow-400'>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className='hover:text-yellow-400'>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className='hover:text-yellow-400'>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar