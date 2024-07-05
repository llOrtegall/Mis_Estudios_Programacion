import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

import Root from './routes/Root'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFound />
  },
  {
    path: '/home',
    element: <Root />,
    errorElement: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
