import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/global.css'

import { AnimateScroll } from './components/Layout/AnimateScroll'
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { Utilitys } from './components/pages/Utilitys';
import { LastReviewPage } from './components/pages/LastReviewPage';



function App() {

  return (
    <>
      <Router>
        <AnimateScroll />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/utilitys' element={<Utilitys />} />
          <Route path='/LastReviewPage' element={<LastReviewPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
