import { useEffect, useId, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const mobileNavId = useId()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  const handleMobileNavItemClick = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={(e) => {
            setIsMobileMenuOpen(false)
            handleLogoClick(e)
          }}
          className="flex items-center gap-3"
        >
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
          <Link
            to="/"
            onClick={(e) => {
              setIsMobileMenuOpen(false)
              handleLogoClick(e)
            }}
            className="hover:text-sky-900"
          >
            Home
          </Link>
          <a href="/#about" className="hover:text-sky-900">
            About
          </a>
          <div className="group relative -my-4 flex cursor-pointer items-center py-4">
            <a href="/#services" className="flex items-center gap-1 hover:text-sky-900">
              Services
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 opacity-0 invisible transition-all duration-300 ease-in-out transform origin-top-left translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="relative ml-2 space-y-6 border-l-2 border-slate-100 py-1">
                {[
                  'Web Application Development',
                  'Mobile Apps',
                  'Enterprise Solutions',
                  'Software Consultancy',
                  'Support & Modernization',
                  'Team as a Service',
                ].map((service, idx) => (
                  <a
                    key={idx}
                    href="/#services"
                    className="group/item relative block pl-6 text-[15px] font-medium text-slate-700 transition-colors hover:text-sky-900"
                  >
                    <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition-all group-hover/item:ring-sky-300 group-hover/item:shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 transition-transform group-hover/item:scale-125"></span>
                    </span>
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative -my-4 flex cursor-pointer items-center py-4">
            <a href="/#industries" className="flex items-center gap-1 hover:text-sky-900">
              Industries
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 opacity-0 invisible transition-all duration-300 ease-in-out transform origin-top-left translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="relative ml-2 space-y-6 border-l-2 border-slate-100 py-1">
                {[
                  'Financial Services',
                  'Retail & E-commerce',
                  'Healthcare & Pharma',
                  'Telecom & Media',
                  'Public Sector',
                  'Logistics & Supply Chain',
                ].map((industry, idx) => (
                  <a
                    key={idx}
                    href="/#industries"
                    className="group/item relative block pl-6 text-[15px] font-medium text-slate-700 transition-colors hover:text-sky-900"
                  >
                    <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition-all group-hover/item:ring-sky-300 group-hover/item:shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 transition-transform group-hover/item:scale-125"></span>
                    </span>
                    {industry}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative -my-4 flex cursor-pointer items-center py-4">
            <a href="/#projects" className="flex items-center gap-1 hover:text-sky-900">
              Projects
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 opacity-0 invisible transition-all duration-300 ease-in-out transform origin-top-left translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="relative ml-2 space-y-6 border-l-2 border-slate-100 py-1">
                {[
                  'Contact Cars Platform',
                  'Furn Platform',
                  'Home Care Platform',
                ].map((project, idx) => (
                  <a
                    key={idx}
                    href="/#projects"
                    className="group/item relative block pl-6 text-[15px] font-medium text-slate-700 transition-colors hover:text-sky-900"
                  >
                    <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition-all group-hover/item:ring-sky-300 group-hover/item:shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 transition-transform group-hover/item:scale-125"></span>
                    </span>
                    {project}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="/#statistics" className="hover:text-sky-900">
            Statistics
          </a>
          <a href="/#trustedclients" className="hover:text-sky-900">
            Clients & Partners
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            id="talk-to-team-btn"
            className="hidden rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-sky-800 md:inline-flex"
          >
            Talk to our team
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-900/30 md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileNavId}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id={mobileNavId}
        className={[
          'md:hidden border-t border-slate-100 bg-white/95 backdrop-blur',
          'overflow-hidden transition-[max-height,opacity] duration-200 ease-out',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="container py-3">
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <a
              href="/#services"
              onClick={handleMobileNavItemClick}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-sky-900"
            >
              Services
            </a>
            <a
              href="/#statistics"
              onClick={handleMobileNavItemClick}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-sky-900"
            >
              Statistics
            </a>
            <a
              href="/#testimonials"
              onClick={handleMobileNavItemClick}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-sky-900"
            >
              Customer Says
            </a>
            <a
              href="/#projects"
              onClick={handleMobileNavItemClick}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-sky-900"
            >
              Projects
            </a>
            <a
              href="/#about"
              onClick={handleMobileNavItemClick}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-sky-900"
            >
              About
            </a>
          </nav>

          <div className="mt-3">
            <Link
              to="/contact"
              onClick={handleMobileNavItemClick}
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-sky-800"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar


