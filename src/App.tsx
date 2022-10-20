import './styles/global.css'

import { Body } from './components/Body'
import { Heading } from './components/Heading'
import { NavBar } from './components/NavBar'
import { AnimateScroll } from './components/AnimateScroll'
import { Footer } from './components/Footer'



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
