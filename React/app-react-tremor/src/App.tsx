import { Route, Routes } from 'react-router-dom'
import Oulet from './pages/Oulet'
import Home from './pages/Home'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Oulet />}>
        <Route index path='home' element={<Home />} />
      </Route>
    </Routes>
  )
}
