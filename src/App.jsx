import React from 'react'
import TopBar from "./components/TopBar"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities1 from './components/Activities1'
import Activities from './components/Activities'

function App() {

  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Activities1 />
    </div>
  )
}

export default App
