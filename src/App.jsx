import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HireModal from './components/HireModal'
import { useState } from 'react'

function App() {
  const [showHireModal, setShowHireModal] = useState(false)

  return (
    <>
      <Navbar />
      <Hero onHireMe={() => setShowHireModal(true)} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      {showHireModal && <HireModal onClose={() => setShowHireModal(false)} />}
    </>
  )
}

export default App
