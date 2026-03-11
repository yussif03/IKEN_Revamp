import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Statistics from './sections/Statistics'
import Testimonials from './sections/Testimonials'
import About from './sections/About'
import Industries from './sections/Industries'
import WorkProcess from './sections/WorkProcess'
import BeforeAfter from './sections/BeforeAfter'
import RecentProjects from './sections/RecentProjects'
import TrustedClients from './sections/TrustedClients'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Statistics />
                <About />
                <TrustedClients />
                <Testimonials />
                <RecentProjects />
                <Industries />
                <BeforeAfter />
                <WorkProcess />
              </>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

