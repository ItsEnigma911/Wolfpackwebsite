import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Server from './components/Server'
import About from './components/About'
import Gallery from './components/Gallery'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  // Section reveal: add .in to every .reveal element once it scrolls into view.
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip" href="#server">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Server />
        <About />
        <Gallery />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
