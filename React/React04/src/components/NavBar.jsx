import { NavLink } from "react-router-dom";
import "./navbar.css"

export function NavBar() {
  return (
    <section>
      <ul>
        <li><NavLink
          className={({ isActive }) => isActive ? 'active' : 'blue'}
          to="/">Home</NavLink>
        </li>
        <li><NavLink
          className={({ isActive }) => isActive ? 'active' : 'blue'}
          to="/about">About</NavLink>
        </li>
        <li><NavLink
          className={({ isActive }) => isActive ? 'active' : 'blue'}
          to="/users">Users</NavLink>
        </li>
      </ul>
    </section>
  )
}