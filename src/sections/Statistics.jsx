import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { label: 'Successful Projects', value: 20, suffix: '+' },
  { label: 'Years of Experience', value: 10, suffix: '+' },
  { label: 'Countries Served', value: 6, suffix: '+' },
  { label: 'Happy Clients', value: 50, suffix: '+' },
]

const StatItem = ({ label, value, suffix, index, start }) => {
  const animated = useCountUp(value, {
    duration: 3000,
    start,
  })

  return (
    <div
      className="rounded-2xl border border-slate-100 bg-white/80 px-6 py-6 shadow-sm transition-all duration-600 ease-in-out md:px-8 md:py-8 text-center"
      style={{
        transitionDelay: `${100 + index * 120}ms`,
      }}
    >
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            By the numbers
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

