import { useScrollReveal } from './hooks/useScrollReveal'
import { useCursor }       from './hooks/useCursor'

import Cursor    from './components/Cursor'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Education from './components/Education'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  useScrollReveal()   // activates .reveal → .visible on scroll
  useCursor()         // mounts custom drag-trail cursor

  return (
    <div style={{ minHeight: '100vh', background: '#080810' }}>
      {/* Cursor DOM nodes — must be outside <main> so z-index works */}
      <Cursor/>

      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
      </main>

      <Footer/>
      <BackToTop/>
    </div>
  )
}
