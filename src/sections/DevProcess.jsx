import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Discovery', desc: 'Deep dive into your business goals and user needs.' },
  { title: 'Product Strategy', desc: 'Defining the roadmap and technical architecture.' },
  { title: 'UI/UX Design', desc: 'Creating intuitive and stunning visual experiences.' },
  { title: 'Development', desc: 'Agile sprints with clean, scalable code implementation.' },
  { title: 'Testing', desc: 'Rigorous QA and performance benchmarking.' },
  { title: 'Launch', desc: 'Seamless deployment and continuous monitoring.' },
];

const DevProcess = () => {
  return (
    <section id="process" className="section-padding bg-gray-50/50 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6">
            Our <span className="text-brand-blue">proven</span> process.
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            From the first workshop to the final deployment, we ensure a transparent and efficient engineering journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-[45px] left-0 w-full h-0.5 bg-gray-200 hidden lg:block overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-brand-blue shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.25) }}
                className="relative text-center lg:text-left group"
              >
                <div className="relative z-10 w-24 h-24 lg:w-20 lg:h-20 bg-white border-2 border-brand-blue rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-8 transition-all group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 shadow-lg font-display text-2xl font-bold text-brand-blue">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{step.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
