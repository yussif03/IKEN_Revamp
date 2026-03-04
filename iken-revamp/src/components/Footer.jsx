import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/IKEN.tech',
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    icon: Twitter,
    href: 'https://x.com/iken_tech',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/iken-tech/?originalSubdomain=eg',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/iken.tech',
  },
]

const Footer = () => {
  return (
    <SectionWrapper
      as="footer"
      className="border-t border-slate-100 bg-slate-950 text-slate-300"
      padding="pt-10 pb-6 md:pt-14 md:pb-8"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide text-sky-300">
            IKEN TECHNOLOGY
          </p>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            We design and build reliable digital products, platforms, and enterprise solutions
            that help organizations move faster and grow with confidence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-semibold text-slate-100">Company</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-sky-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-300">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-100">Industries</p>
            <ul className="space-y-2 text-slate-400">
              <li>Financial Services</li>
              <li>Retail &amp; E‑commerce</li>
              <li>Healthcare &amp; Pharma</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-100">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ id, label, icon: Icon, href }) => (
                <a
                  key={id}
                  id={`social-${id}`}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-colors duration-300 ease-in-out hover:bg-sky-600 hover:text-white"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-4 text-xs text-slate-500 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} IKEN Technology. All rights reserved.</p>
        <p className="space-x-4">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </p>
      </div>
    </SectionWrapper>
  )
}

export default Footer

