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
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${100 + index * 80}ms` }}
    >
      {/* Subtle Gradient Hover Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content Wrapper (keeps content above gradient) */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
          {description}
        </p>
      </div>
    </article>
  )
}

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-slate-50">
      <div className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
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

