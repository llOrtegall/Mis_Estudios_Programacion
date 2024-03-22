import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <figure>
        <img src="/vite.svg" alt="React Logo" />
        <span>React App</span>
      </figure>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar