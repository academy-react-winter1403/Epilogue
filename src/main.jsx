import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import { mainPages } from './config/router'
import { root } from './config/router/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
    </StrictMode>,
)
