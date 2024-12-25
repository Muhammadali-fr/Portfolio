import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import './index.css'


// layouts/
import MianLayout from './layout/MianLayout';

// component and pages 


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MianLayout />,
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App