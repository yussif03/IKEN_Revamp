import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Industries from './sections/Industries';
import WorkProcess from './sections/WorkProcess';
import RecentProjects from './sections/RecentProjects';
import CTA from './sections/CTA';
import TrustedClients from './sections/TrustedClients';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Featured Services */}
        <Services />
        {/* 3. Statistics — EXACT values: 20+, 10+, 6+, 50+ */}
        <Statistics />
        {/* 4. Customer Says — EXACT testimonial images */}
        <Testimonials />
        {/* 5. About */}
        <About />
        {/* 6. Industries */}
        <Industries />
        {/* 7. Work Process */}
        <WorkProcess />
        {/* 8. Recent Projects */}
        <RecentProjects />
        {/* 9. CTA Banner */}
        <CTA />
        {/* 10. Trusted Clients */}
        <TrustedClients />
      </main>
      <Footer />
    </div>
  );
}
