import { NavLink } from 'react-router-dom'

const NavBar = (): JSX.Element => {
  return (
    <nav className='bg-blue-900'>
      <ul className='flex justify-around py-2 text-2xl font-semibold'>
        <li className='hover:text-blue-200'><NavLink to="/">Home</NavLink></li>
        <li className='hover:text-blue-200'><NavLink to="/about">About</NavLink></li>
        <li className='hover:text-blue-200'><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
