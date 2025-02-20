import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import './index.css'


// layouts/
import MianLayout from './layout/MianLayout';

// pages
import Home from './pages/Home';

// component and pages 


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MianLayout />,
      children: [
        {
          index: true,
          element: <Home/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App