import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Main Sections (v2)
import Hero from './sections/Hero'
import TrustProof from './sections/TrustProof'
import SolutionsGrid from './sections/SolutionsGrid'
import ProductShowcase from './sections/ProductShowcase'
import DevProcess from './sections/DevProcess'
import FeaturedProjects from './sections/FeaturedProjects'
import WhyChooseUs from './sections/WhyChooseUs'
import Testimonials from './sections/Testimonials'
import Insights from './sections/Insights'
import FinalCTA from './sections/FinalCTA'

import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-black">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustProof />
                <SolutionsGrid />
                <ProductShowcase />
                <DevProcess />
                <FeaturedProjects />
                <WhyChooseUs />
                <Testimonials />
                <Insights />
                <FinalCTA />
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

