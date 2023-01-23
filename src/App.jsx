import React from 'react'
import TopBar from "./components/TopBar"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities1 from './components/Activities1'
import Booking from './components/Booking'
import Gallery from './components/gallery'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Activities1 />
      <Booking />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
