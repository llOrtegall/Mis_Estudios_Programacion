//import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { AuthProvider } from "./useAuth.jsx";

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
