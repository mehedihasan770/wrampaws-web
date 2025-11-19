import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routs/Router'
import AuthProvider from './AuthContext/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>,
)
