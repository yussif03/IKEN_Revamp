import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import {
  Globe,
  Smartphone,
  Building2,
  Lightbulb,
  RefreshCw,
  Users
} from 'lucide-react'

const services = [
  {
    title: 'Web Application Development',
    description:
      'Designing and building secure, scalable web platforms tailored to your business workflows.',
    icon: Globe,
  },
  {
    title: 'Mobile Apps',
    description:
      'Native and cross‑platform mobile experiences that keep your customers engaged everywhere.',
    icon: Smartphone,
  },
  {
    title: 'Enterprise Solutions',
    description:
      'End‑to‑end business systems that integrate with your existing stack and scale with growth.',
    icon: Building2,
  },
  {
    title: 'Software Consultancy',
    description:
      'Partnering with your leadership and teams to shape roadmaps, architectures, and delivery plans.',
    icon: Lightbulb,
  },
  {
    title: 'Support & Modernization',
    description:
      'Stabilizing legacy applications, reducing risk, and extending the life of critical systems.',
    icon: RefreshCw,
  },
  {
    title: 'Team as a Service',
    description:
      'Specialized squads of engineers, designers, and consultants embedded in your organization.',
    icon: Users,
  },
]

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <article
      ref={ref}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-sky-900 hover:border-sky-900 items-center justify-center text-center ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${100 + index * 80}ms` }}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center w-full">
        {/* Icon */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-all duration-300 group-hover:bg-sky-800 group-hover:text-white group-hover:scale-125">
          <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        {/* Description (Hidden by default, revealed on hover) */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
          <p className="overflow-hidden text-sm text-slate-200">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-slate-50">
      <div className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 transition-all duration-700 ease-out">
            Services
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            From idea to production‑grade digital products.
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            IKEN Technology provides full‑cycle software development, consulting, and long‑term
            support, helping organizations launch and evolve mission‑critical systems with
            confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Services

