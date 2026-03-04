import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import teamImage from '../assets/teamwork.jpg'

const About = () => {
  const { ref: leftRef, isInView: leftInView } = useIntersectionObserver()
  const { ref: rightRef, isInView: rightInView } = useIntersectionObserver()

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div
          ref={leftRef}
          className={`h-full rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-600 ease-in-out ${
            leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-7'
          }`}
        >
          {/* <div className="grid h-full place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 px-6 py-12 text-center text-xs text-slate-500">
            Company imagery / team photo
          </div> */}
          <img
            src={teamImage}
            alt="IKEN team"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div
          ref={rightRef}
          className={`space-y-4 transition-all duration-600 ease-in-out ${
            rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-7'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            About IKEN Technology
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            A focused engineering partner for organizations that need reliable software.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            IKEN Technology is a software consulting and development company helping organizations
            define, build, and scale digital products across web, mobile, and enterprise.
          </p>
          <p className="text-sm text-slate-600 md:text-base">
            Our teams combine strategic thinking, hands‑on engineering, and ongoing support. We
            focus on clarity, accountability, and a delivery culture that keeps complex projects on
            track.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About

