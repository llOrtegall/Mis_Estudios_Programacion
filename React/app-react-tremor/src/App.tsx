import { Route, Routes } from 'react-router-dom'

import Aplicaiones from './pages/Aplicaciones'
import Promociones from './pages/Promociones'
import Loterias from './pages/Loterias'
import Noticias from './pages/Noticias'
import Home from './pages/Home'

import Oulet from './components/Oulet'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Oulet />}>
        <Route index element={<Home />} />
        <Route path='loterias' element={<Loterias />} />
        <Route path='noticias' element={<Noticias />} />
        <Route path='promociones' element={<Promociones />} />
        <Route path='aplicaciones' element={<Aplicaiones />} />
      </Route>
    </Routes>
  )
}
