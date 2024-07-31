import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expereince from './components/Expereince'
import Projects from './components/Projects'
import About from './components/About'
import Licences from './components/Licences'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Expereince></Expereince>
      <Projects></Projects>
      <Licences></Licences>
    </>
  )
}

export default App
