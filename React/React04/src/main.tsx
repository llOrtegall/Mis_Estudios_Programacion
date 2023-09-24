import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from './routes/root.jsx';

const root = createRoot(document.getElementById('root')!)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
