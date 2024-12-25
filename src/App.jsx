// react-router-dom 
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

// pages 
import Home from './pages/Home';
import Faq from './pages/help/Faq';
import Form from './pages/help/Form';
import Article from './pages/articles/Article';
import PageNotFound from './pages/PageNotFound';

// css 
import './index.css';

// layout 
import MainLayout from './layout/MainLayout';
import ContactLayout from './layout/ContactLayout';
import ArticlsLayout from './layout/ArticlsLayout';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'contact',
          element: <ContactLayout />,
          children: [
            {
              path: 'faq',
              element: <Faq />
            },
            {
              path: 'form',
              element: <Form />
            }
          ]
        },
        {
          path: "article",
          element: <ArticlsLayout />,
          children: [
            {
              index: true,
              element: <Article />
            }
          ]
        },
        {
          path: '*',
          element: <PageNotFound />
        }
      ]
    }
  ])


  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
