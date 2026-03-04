import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const testimonials = [
  {
    name: 'Technology Leader',
    role: 'Enterprise Client',
    quote:
      'IKEN Technology quickly understood our environment and delivered a platform that has become the backbone of our operations.',
  },
  {
    name: 'Product Owner',
    role: 'SaaS Company',
    quote:
      'Their team integrated seamlessly with ours, helping us ship faster while keeping quality and reliability high.',
  },
  {
    name: 'Operations Director',
    role: 'Regional Business',
    quote:
      'We value IKEN as a long‑term partner for both new initiatives and modernization of existing systems.',
  },
  {
    name: 'CTO',
    role: 'Fintech Startup',
    quote:
      'From architecture to delivery, the collaboration was transparent and focused on business outcomes.',
  },
]

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="text-xs text-amber-400">
        ★
      </span>
    ))}
  </div>
)

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, isInView } = useIntersectionObserver()

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <SectionWrapper id="testimonials" className="bg-slate-50">
      <div ref={ref} className="space-y-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Customer Says
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Teams that trust IKEN Technology.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-600 md:text-base">
              Long‑term partnerships with organizations that rely on us to design, build, and
              maintain critical software assets.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 transition-colors duration-400 ease-in-out hover:border-sky-500 hover:text-sky-700"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 transition-colors duration-400 ease-in-out hover:border-sky-500 hover:text-sky-700"
            >
              ›
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%]"
              >
                <article
                  className={`flex h-full flex-col rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${100 + index * 80}ms` }}
                >
                  <Stars />
                  <p className="mt-4 text-sm text-slate-700">“{item.quote}”</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-400 ease-in-out ${
                index === activeIndex ? 'w-5 bg-sky-600' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Testimonials

