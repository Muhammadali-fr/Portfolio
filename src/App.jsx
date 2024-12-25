import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

// layouts/
import MianLayout from './layout/MianLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MianLayout />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App