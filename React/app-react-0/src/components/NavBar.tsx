import LogoIcon from './ui/LogoIcon'
import NavLinkComp from './ui/NavLinkComp'

const Links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Contact', path: '/contact' },
]

const NavBar = (): JSX.Element => {
  return (
    <nav className='bg-slate-600 text-white font-semibold px-2 py-4 flex justify-around'>
      <LogoIcon />
      <ul className='flex gap-2 items-center'>
        {
          Links.map((link, index) => (
            <NavLinkComp key={index} path={link.path} text={link.name} />
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar