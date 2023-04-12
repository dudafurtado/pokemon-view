import React, { HtmlHTMLAttributes } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/Home'
import List from './pages/List'
import './style.css'

const router = createBrowserRouter([{
  path:'/',
  element: <Home />
},
{
  path:'/list',
  element: <List />
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
