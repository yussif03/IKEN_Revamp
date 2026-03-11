import SectionWrapper from '../components/SectionWrapper'
import { motion, useInView } from 'framer-motion'
import { Search, Code2, Rocket } from 'lucide-react'
import { useRef } from 'react'

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
    title: 'Build and Create',
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
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { 
    amount: 0.2, // Trigger when 20% of the section is visible
    once: false   // Animate back when scrolling away
  })

  return (
    <SectionWrapper id="process" className="bg-white overflow-hidden">
      <div className="space-y-16 py-8">
        {/* Centered Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4">
            Our Work Process
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            A clear, transparent delivery model
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            From discovery to launch, we keep teams aligned and decisions documented so that complex
            software projects move forward with confidence.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div ref={containerRef} className="mx-auto max-w-6xl px-4 relative mt-20">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-slate-100">
            <motion.div 
              className="h-full bg-sky-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Animated Connecting Line (Mobile) */}
          <div className="md:hidden absolute left-10 top-0 bottom-0 w-0.5 bg-slate-100">
             <motion.div 
              className="h-full bg-sky-500 origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>


          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative z-10 flex flex-col items-center flex-1 w-full md:w-auto"
                >
                  {/* Step Indicator & Icon Container */}
                  <div className="flex flex-row md:flex-col items-center gap-6 md:gap-0 w-full md:w-auto">
                    <div className="flex flex-col items-center gap-3 shrink-0">
                      {/* Step Circle */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20,
                          delay: index * 0.2 + 0.3 
                        }}
                        viewport={{ once: true }}
                        className="relative z-20 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-sky-600 shadow-sm transition-all duration-300 hover:border-sky-200 group cursor-pointer"
                      >
                         <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="relative z-10"
                         >
                            <Icon strokeWidth={2} className="h-8 w-8" />
                         </motion.div>
                         
                         {/* Pulse effect on step circle when active/visible */}
                         <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: [0, 0.4, 0], scale: [0.8, 1.2, 1.4] } : { opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                            className="absolute inset-0 rounded-2xl bg-sky-400 -z-10"
                         />
                      </motion.div>

                      {/* Step Number Badge */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white shadow-lg z-30 ring-4 ring-white"
                      >
                        {step.id}
                      </motion.div>
                    </div>

                    {/* Content (Mobile horizontal layout next to icon, Desktop vertical below icon) */}
                    <div className="flex-1 md:mt-4 text-left md:text-center group cursor-default">
                       <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 md:p-4 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-sky-100/50 hover:bg-sky-50/30"
                       >
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                       </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WorkProcess


