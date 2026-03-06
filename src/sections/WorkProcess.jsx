import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Search, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Analysis',
    description:
      'We work with your stakeholders to clarify goals, constraints, and success metrics.',
    icon: Search,
  },
  {
    id: 2,
    title: 'We Build and Create',
    description:
      'Cross‑functional teams design, implement, and test iteratively with clear milestones.',
    icon: Code2,
  },
  {
    id: 3,
    title: 'Faster Delivery',
    description:
      'We rollout, monitor, and refine in production, ensuring stability and measurable impact.',
    icon: Rocket,
  },
]

const WorkProcess = () => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <SectionWrapper id="process" className="bg-white overflow-hidden">
      <div ref={ref} className="space-y-16 py-8">
        {/* Centered Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <p 
            className={`text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Work Process
          </p>
          <h2 
            className={`mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A clear, transparent delivery model
          </h2>
          <p 
            className={`mt-4 text-sm text-slate-600 md:text-base ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            From discovery to launch, we keep teams aligned and decisions documented so that complex
            software projects move forward with confidence.
          </p>
        </div>

        {/* Centered Grid Section */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={step.title}
                  className={`group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100 hover:border-sky-200 cursor-pointer overflow-hidden ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  {/* Subtle Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Interactive Icon Box */}
                    <div className="mb-8 relative flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-200 group-hover:-translate-y-1">
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:-inset-2 group-hover:border-sky-100 group-hover:bg-transparent" />
                      <Icon strokeWidth={2} className="relative z-10 h-8 w-8 transition-transform duration-500 group-hover:rotate-6" />
                    </div>
                    
                    {/* Step Title & Number */}
                    <div className="mb-4 flex flex-col items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white transition-all duration-500 group-hover:bg-sky-600 group-hover:scale-110 shadow-md">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-950">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Interactive Line Indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WorkProcess

