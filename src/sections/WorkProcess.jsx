import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const steps = [
  {
    title: 'Analysis',
    description:
      'We work with your stakeholders to clarify goals, constraints, and success metrics.',
  },
  {
    title: 'We Build and Create',
    description:
      'Cross‑functional teams design, implement, and test iteratively with clear milestones.',
  },
  {
    title: 'Faster Delivery',
    description:
      'We rollout, monitor, and refine in production, ensuring stability and measurable impact.',
  },
]

const WorkProcess = () => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <SectionWrapper id="process" className="bg-white">
      <div ref={ref} className="space-y-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Work process
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            A clear, transparent delivery model.
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            From discovery to launch, we keep teams aligned and decisions documented so that complex
            software projects move forward with confidence.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <div
              className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-slate-200 md:left-5"
            >
              <div
                className={`h-full w-full origin-top bg-sky-500 transition-transform duration-700 ease-in-out ${
                  isInView ? 'scale-y-100' : 'scale-y-0'
                }`}
              />
            </div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex gap-4 md:gap-5">
                  <div className="relative z-10 mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-sky-200">
                    {index + 1}
                  </div>
                  <div
                    className={`rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm transition-all duration-600 ease-in-out ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${120 + index * 140}ms` }}
                  >
                    <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WorkProcess

