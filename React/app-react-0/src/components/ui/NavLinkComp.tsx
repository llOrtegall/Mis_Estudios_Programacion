import { NavLink } from 'react-router-dom'

interface NavLinkCompProps {
  path: string
  text: string
}

const NavLinkComp = ({ path, text }: NavLinkCompProps): JSX.Element => {
  return (
    <li className='hover:text-yellow-400'>
      <NavLink to={path}>
        {text}
      </NavLink>
    </li>
  )
}

export default NavLinkComp
