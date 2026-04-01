import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Curtain from './components/Curtain'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Events from './components/Events'
import BlessingsVenue from './components/BlessingsVenue'
import Footer from './components/Footer'
import AudioToggle from './components/AudioToggle'
import PetalsCanvas from './components/PetalsCanvas'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  // Always start at hero on refresh
  useEffect(() => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    document.body.style.overflow = 'hidden'
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
    document.body.style.overflow = ''
  }

  return (
    <>
      <AudioToggle isOpen={isOpen} />
      <PetalsCanvas />

      <AnimatePresence>
        {!isOpen && <Curtain onOpen={handleOpen} />}
      </AnimatePresence>

      <main className="relative z-5">
        <Hero isOpen={isOpen} />
        <OurStory />
        <Events />
        <BlessingsVenue />
        <Footer />
      </main>
    </>
  )
}
