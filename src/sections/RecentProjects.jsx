import SectionWrapper from '../components/SectionWrapper'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ArrowRight } from 'lucide-react'
import contactCarsImg from '../assets/p-contactcars.jpg'
import furnImg from '../assets/p-furn.jpg'
import homecareImg from '../assets/p-homecare.jpg'

const projects = [
  {
    title: 'Contact Cars Platform',
    category: 'Web Application',
    image: contactCarsImg,
  },
  {
    title: 'Furn Platform',
    category: 'Mobile Application',
    image: furnImg,
  },
  {
    title: 'Home Care Platform',
    category: 'Mobile Application',
    image: homecareImg,
  },
]

const ProjectCard = ({ title, category, image, index }) => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <article
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100 hover:border-sky-200 cursor-pointer ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      <div className="relative h-52 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle overlay that appears on hover to make image slightly darker, giving text more pop if needed, but mainly for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-between flex-grow p-5 md:p-6 bg-white transition-colors duration-500 group-hover:bg-sky-50/10">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 transition-transform duration-500 group-hover:scale-150"></span>
            {category}
          </p>
          <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-800">
            {title}
          </h3>
        </div>
        
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-[13px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
            Discovery · Design · Delivery
          </span>
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-sky-500 group-hover:text-white -translate-x-3 group-hover:translate-x-0 shadow-sm">
            <ArrowRight size={16} strokeWidth={2.5} />
          </div> */}
        </div>
      </div>
      
      {/* Interactive Bottom Line */}
      <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-sky-500 transition-all duration-500 ease-out group-hover:w-full" />
    </article>
  )
}

const RecentProjects = () => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <SectionWrapper id="projects" className="bg-slate-50 py-16">
      <div className="space-y-16" ref={ref}>
        <div className="max-w-2xl font-sans">
          <p 
            className={`inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Recent Projects
          </p>
          <h2 
            className={`mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Modern platforms and products delivered by IKEN
          </h2>
          <p 
            className={`mt-4 text-sm text-slate-600 md:text-base transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Each engagement is tailored to our clients' teams, processes, and business models,
            with a focus on sustainable delivery.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RecentProjects

