import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { mainPages } from './config/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={mainPages} />
    </StrictMode>,
)
