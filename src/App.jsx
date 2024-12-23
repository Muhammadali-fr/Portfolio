// react-router-dom 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages 
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <nav>
          <h1>My Logo</h1>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App