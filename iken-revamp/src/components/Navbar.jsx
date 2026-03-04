import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (pathname === '/') {
      // Already home — just scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to home then jump to top
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
          {/* <div className="h-9 w-9 rounded-lg bg-sky-900" aria-hidden /> */}
          <img
            src={logo}
            alt="IKEN logo"
            className="mt-1 h-8 w-15 object-contain"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-slate-900">
              IKEN TECHNOLOGY
            </p>
            <p className="text-xs text-slate-500">Digital Transformation Partner</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="/#services" className="hover:text-sky-900">
            Services
          </a>
          <a href="/#statistics" className="hover:text-sky-900">
            Statistics
          </a>
          <a href="/#testimonials" className="hover:text-sky-900">
            Customer Says
          </a>
          <a href="/#projects" className="hover:text-sky-900">
            Projects
          </a>
          <a href="/#about" className="hover:text-sky-900">
            About
          </a>
        </nav>
        <Link
          to="/contact"
          id="talk-to-team-btn"
          className="hidden rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-sky-800 md:inline-flex"
        >
          Talk to our team
        </Link>
      </div>
    </header>
  )
}

export default Navbar


