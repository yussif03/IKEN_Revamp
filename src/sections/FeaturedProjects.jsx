import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import pContactCars from '../assets/p-contactcars.jpg';
import pFurn from '../assets/p-furn.jpg';
import pHomeCare from '../assets/p-homecare.jpg';
import pMoqawalat from '../assets/p-moqawalat.jpg';

const projects = [
  {
    title: 'ContactCars.com',
    category: 'Automotive / Marketplace',
    image: pContactCars,
    description: 'A comprehensive automotive platform for buying, selling, and managing vehicle data.',
    tags: ['Next.js', 'PostgreSQL', 'Cloud Architecture']
  },
  {
    title: 'Furn App',
    category: 'E-commerce / AR',
    image: pFurn,
    description: 'Interactive furniture shopping experience with advanced filter and visualization tools.',
    tags: ['React Native', 'Node.js', 'AR Integration']
  },
  {
    title: 'HomeCare',
    category: 'Healthcare / Service',
    image: pHomeCare,
    description: 'On-demand healthcare platform connecting practitioners with patients for home visits.',
    tags: ['TypeScript', 'Microservices', 'AWS']
  },
  {
    title: 'Moqawalat',
    category: 'Construction / ERP',
    image: pMoqawalat,
    description: 'Enterprise resource planning system tailored for large-scale construction management.',
    tags: ['React', 'Enterprise', 'Real-time Sync']
  },
];

const FeaturedProjects = () => {
  return (
    <section id="work" className="section-padding bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-20 right-[-5%] text-[15rem] font-black text-black/[0.02] select-none pointer-events-none tracking-tighter">
        PROJECTS
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-8 leading-tight">
                Engineering <br /><span className="text-gradient">impactful solutions.</span>
              </h2>
              <p className="text-xl text-brand-slate max-w-xl">
                A selection of high-impact products we’ve built for industry leaders and disruptive startups.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-[2rem] mb-8 bg-white border border-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-1.5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white text-brand-black flex items-center justify-center scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-brand-blue/30 group-hover:w-12 group-hover:bg-brand-blue transition-all duration-500" />
                  <p className="text-brand-blue font-bold uppercase tracking-[0.2em] text-[10px]">{project.category}</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-black group-hover:text-brand-blue transition-colors duration-500 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base text-brand-slate leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
