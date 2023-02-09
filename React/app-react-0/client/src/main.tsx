import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
