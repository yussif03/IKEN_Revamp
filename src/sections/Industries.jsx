import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Building2, ShoppingCart, HeartPulse, Radio, Landmark, Truck } from 'lucide-react'

const icons = [
  Building2,
  ShoppingCart,
  HeartPulse,
  Radio,
  Landmark,
  Truck,
]

const industries = [
  {
    label: 'Financial Services',
    description:
      'Secure, compliant systems for banking, fintech, and regulated financial institutions.',
    icon: Landmark,
  },
  {
    label: 'Retail & E-commerce',
    description:
      'Scalable commerce platforms and customer-centric digital experiences.',
    icon: ShoppingCart,
  },
  {
    label: 'Healthcare & Pharma',
    description:
      'HIPAA-ready platforms, data security, and digital health innovation.',
    icon: HeartPulse,
  },
  {
    label: 'Telecom & Media',
    description:
      'High-availability systems supporting content, connectivity, and scale.',
    icon: Radio,
  },
  {
    label: 'Public Sector',
    description:
      'Modernization of government systems with transparency and reliability.',
    icon: Building2,
  },
  {
    label: 'Logistics & Supply Chain',
    description:
      'Operational platforms optimizing distribution, tracking, and efficiency.',
    icon: Truck,
  },
]

const IndustryCard = ({ label, description, Icon, index }) => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-sky-900 hover:border-sky-900 items-center justify-center text-center ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${80 + index * 70}ms` }}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center w-full">
        {/* Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-all duration-300 group-hover:bg-sky-800 group-hover:text-white group-hover:scale-125">
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <p className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
          {label}
        </p>

        {/* Description (Hidden by default, revealed on hover) */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3">
          <p className="overflow-hidden text-sm text-slate-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

const Industries = () => {
  return (
    <SectionWrapper id="industries" className="bg-slate-50">
      <div className="space-y-8">
        <div className="max-w-xl">
          <p className="inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 transition-all duration-700 ease-out">
            Industries
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Experience across critical industries.
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            We work with organizations in regulated and fast‑moving markets, shaping technology
            that aligns with business goals and compliance requirements.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <IndustryCard
              key={item.label}
              label={item.label}
              description={item.description}
              Icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Industries

