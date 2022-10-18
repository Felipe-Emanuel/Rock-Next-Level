import './styles/global.css'

import { Body } from './components/Body'
import { Heading } from './components/Heading'
import { NavBar } from './components/NavBar'
import { AnimateScroll } from './components/AnimateScroll'



function App() {

  return (
    <>
    <div className='lg:hidden h-0'>

      <NavBar />
    </div>
      <AnimateScroll />
      <Heading />
      <Body />
    </>
  )
}

export default App
