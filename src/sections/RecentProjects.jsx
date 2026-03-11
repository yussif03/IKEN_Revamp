import { useRef, useEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { motion, useAnimationControls } from 'framer-motion'
import contactCarsImg from '../assets/p-contactcars.jpg'
import furnImg from '../assets/p-furn.jpg'
import homecareImg from '../assets/p-homecare.jpg'
import moqawalatImg from '../assets/p-moqawalat.jpg'

const projects = [
  {
    title: 'Contact Cars Platform',
    category: 'Mobile Application',
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
  {
    title: 'Moqawalat Platform',
    category: 'Web Application',
    image: moqawalatImg,
  }
]

// Duplicate projects for infinite loop
const infiniteProjects = [...projects, ...projects]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const ProjectCard = ({ title, category, image }) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative flex flex-col flex-shrink-0 w-[300px] md:w-[400px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:border-sky-200 cursor-pointer"
    >
      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 flex flex-col justify-between flex-grow p-6 bg-white transition-colors duration-500 group-hover:bg-sky-50/10">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
            {category}
          </p>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-800">
            {title}
          </h3>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 ease-out group-hover:w-full" />
    </motion.article>
  )
}

const RecentProjects = () => {
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimationControls()
  const containerRef = useRef(null)

  // Start the infinite animation
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: '-50%',
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        },
      })
    }
    startAnimation()
  }, [controls])

  // Handle Pause/Resume
  const handleMouseEnter = () => controls.stop()
  const handleMouseLeave = () => {
    controls.start({
      x: '-50%',
      transition: {
        duration: 30,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }

  return (
    <SectionWrapper id="projects" className="bg-slate-50 py-20 overflow-hidden">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <p className="inline-block rounded-full bg-sky-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4">
            Our Portfolio
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Modern platforms and products delivered by IKEN
          </h2>
        </motion.div>

        <div
          className="relative flex overflow-hidden mask-fade cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={containerRef}
            animate={controls}
            className="flex gap-8 px-4"
            style={{ width: 'max-content' }}
          >
            {infiniteProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                {...project}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style >{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </SectionWrapper>
  )
}

export default RecentProjects
