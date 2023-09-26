import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <section>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
    </section>
  )
}