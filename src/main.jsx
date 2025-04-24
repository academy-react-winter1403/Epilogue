
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'
// import { mainPages } from './config/router'
import { root } from './config/router/router'
import { Toaster } from 'react-hot-toast'
=======
import App from './app/App'
>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <RouterProvider router={root} />
    <Toaster/>
    </StrictMode>,
=======
    <App />
  </StrictMode>,
>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc
)
