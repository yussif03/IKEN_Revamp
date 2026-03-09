import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCountUp } from '../hooks/useCountUp'
import { Briefcase, Award, Globe, Users } from 'lucide-react'

const stats = [
  { label: 'Successful Projects', value: 20, suffix: '+', icon: Briefcase },
  { label: 'Years of Experience', value: 10, suffix: '+', icon: Award },
  { label: 'Countries Served', value: 6, suffix: '+', icon: Globe },
  { label: 'Happy Clients', value: 50, suffix: '+', icon: Users },
]

const StatItem = ({ label, value, suffix, index, start, icon: Icon }) => {
  const animated = useCountUp(value, {
    duration: 3000,
    start,
  })

  return (
    <div
      className="group rounded-2xl border border-slate-100 bg-white/80 px-6 py-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-md md:px-8 md:py-8 text-center flex flex-col items-center"
      style={{
        transitionDelay: `${100 + index * 120}ms`,
      }}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
        <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      </div>
      {/* <p className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"> */}
      <p className="text-4xl md:text-4xl font-bold tracking-tight text-sky-700">
        {animated}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  )
}

const Statistics = () => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <SectionWrapper id="statistics" className="bg-white">
      <div ref={ref} className="space-y-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 transition-all duration-700 ease-out">
            By The Numbers
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            A focused team with a track record of shipping.
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            From first release to long‑term support, we stay accountable for outcomes and keep
            teams moving forward.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              index={index}
              start={isInView}
              {...stat}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Statistics

