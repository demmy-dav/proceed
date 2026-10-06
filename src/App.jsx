import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Sectors from './components/Sectors.jsx'
import Contact from './components/Contact.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

// page: "home" (/), "work" (/work/), "how" (/how-we-work/) or "book" (/book/), set by data-page on #root.
export default function App({ page = 'home' }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav page={page} />
      <main id="main">
        {page === 'work' && <Work />}
        {page === 'how' && <Process />}
        {page === 'book' && <Booking />}
        {page === 'home' && (
          <>
            <Hero />
            <Problem />
            <Sectors />
          </>
        )}
        {page !== 'book' && <Contact />}
      </main>
      <Footer />
    </>
  )
}
