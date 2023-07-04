import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from 'pages/Home'
import GroupDatails from 'pages/GroupDatails'
import {
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detalhes',
    element: <GroupDatails />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
