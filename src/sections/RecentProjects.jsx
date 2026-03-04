import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import enterpriseImg from '../assets/project-enterprise.svg'
import portalImg from '../assets/project-portal.svg'
import mobileImg from '../assets/project-mobile.svg'

const projects = [
  {
    title: 'Enterprise Operations Platform',
    category: 'Enterprise Solution',
    image: enterpriseImg,
  },
  {
    title: 'Customer Self‑Service Portal',
    category: 'Web Application',
    image: portalImg,
  },
  {
    title: 'Field Team Mobile App',
    category: 'Mobile Application',
    image: mobileImg,
  },
]

const ProjectCard = ({ title, category, image, index }) => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-950 text-white shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/20 transition-colors duration-500 ease-in-out group-hover:bg-slate-950/35" />
      </div>
      <div className="relative z-10 flex flex-col justify-between p-5 md:p-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
            {category}
          </p>
          <h3 className="mt-3 text-base font-semibold md:text-lg">{title}</h3>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
          <span>Discovery · Design · Delivery</span>
          <span className="font-semibold text-sky-300">View case study</span>
        </div>
      </div>
    </article>
  )
}

const RecentProjects = () => {
  return (
    <SectionWrapper id="projects" className="bg-slate-50">
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Recent projects
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Modern platforms and products delivered by IKEN.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 md:text-base">
            Each engagement is tailored to our clients&apos; teams, processes, and business models,
            with a focus on sustainable delivery.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RecentProjects

