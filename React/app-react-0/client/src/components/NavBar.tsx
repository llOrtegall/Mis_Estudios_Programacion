import { NavLink } from 'react-router-dom'

const Links = [
  { id: 1, to: '/', label: 'Home' },
  { id: 2, to: '/about', label: 'About' },
  { id: 3, to: '/contact', label: 'Contact' }
]

export function NavBar () {
  return (
    <nav className='py-2 px-4 bg-gradient-to-b from-blue-700 to-blue-800'>
      <ul className='flex gap-4 text-xl font-semibold text-white'>
        {Links.map((link) =>
          <li key={link.id}>
            <NavLink to={link.to} className='hover:text-red-200'>{link.label}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}
