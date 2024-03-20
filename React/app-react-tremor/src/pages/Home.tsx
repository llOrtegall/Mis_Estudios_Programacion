import { Switch } from '@tremor/react'
import { useTheme } from '../context/ThemeProvider'

const Home = (): JSX.Element => {
  const { toggleTheme } = useTheme()

  return (
    <section>
      <h1>Pagina Home</h1>
      <Switch onChange={toggleTheme} />
    </section>
  )
}

export default Home
