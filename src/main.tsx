import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home';
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
