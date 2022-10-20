import './styles/global.css'

import { Body } from './components/Layout/Body'
import { Heading } from './components/Layout/Heading'
import { NavBar } from './components/Layout/NavBar'
import { AnimateScroll } from './components/Layout/AnimateScroll'
import { Footer } from './components/Layout/Footer'



function App() {

  return (
    <>
      <AnimateScroll />
      <div className='lg:hidden h-0'>
        <NavBar />
      </div>
        <Heading />
        <Body />
        <Footer />
    </>
  )
}

export default App
