import { Switch } from '@tremor/react'
import { useTheme } from '../context/ThemeProvider'

const NavBar = (): JSX.Element => {
  const { toggleTheme } = useTheme()

  return (
    <nav className='bg-blue-700 dark:bg-slate-900 p-2 w-64'>

      <figure>
        <img />
      </figure>

      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
      </ul>

      <figure>
        <Switch onChange={toggleTheme} />
      </figure>
    </nav>
  )
}

export default NavBar
