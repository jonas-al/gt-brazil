// styles
import './App.css'

// pages
import Home from 'pages/Home'
import GroupDatails from 'pages/GroupDatails'

// context
import { GroupProvider } from 'context/GroupContext'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

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

function App() {
  return (
    <GroupProvider>
      <RouterProvider router={router} /> 
    </GroupProvider>
  )
}

export default App
