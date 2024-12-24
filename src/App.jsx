// react-router-dom 
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink
} from 'react-router-dom';

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
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<ContactLayout />}>
          <Route path='faq' element={<Faq />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='article' element={<ArticlsLayout />}>
          <Route index element={<Article />} />
        </Route>
        {/* Page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
