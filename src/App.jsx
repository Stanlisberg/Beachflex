import React from 'react'
import TopBar from "./components/TopBar"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities1 from './components/Activities'
import Booking from './components/Booking'
import Gallery from './components/gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BeachflexProvider } from './components/context/BeachflexContext'

function App() {

  return (
    <BeachflexProvider>
      <div className="App">
        <TopBar />
        <Navbar />
        <Hero />
        <Activities1 />
        <Booking />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </BeachflexProvider>
  )
}

export default App
