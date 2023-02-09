import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'

const App = (): JSX.Element => {
  return (
    <>
      <Routes>

        <Route path="/login" element={<div>Login</div>} />

        <Route element={<ProtectedRoute isAllowed={true} redirectTo="/login" />} >
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Route>
      </Routes>
    </>

  )
}

export default App

// <Route path="/" element={<div>Home</div>} />
// <Route path="/about" element={<div>About</div>} />
// <Route path="/contact" element={<div>Contact</div>} />
