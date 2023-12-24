import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import '@/index.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <RouterProvider router={routes} />
  </NextUIProvider>
)
