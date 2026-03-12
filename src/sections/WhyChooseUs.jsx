import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Product-First Thinking',
    description: 'We don’t just write code. We partner with you to define the product vision and user experience.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Scalable Architecture',
    description: 'Every system we build is designed to handle millions of users from day one.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Senior-Only Engineering',
    description: 'Your project is handled by seasoned experts with years of experience in complex systems.',
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Long-term Partnership',
    description: 'We grow with you. Our goal is to be your embedded technology partner for the long haul.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute bottom-[-5%] left-[-5%] text-[20rem] font-black text-black/[0.015] select-none pointer-events-none tracking-tighter">
        IKEN
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/10">
              Why Partner With Us
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold text-brand-black mb-8 leading-[1.1] tracking-tight">
              We build more than code. We build <span className="text-gradient">impact.</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-slate leading-relaxed mb-10 max-w-xl">
              In a world of generic agencies, we stand out by focusing on what actually matters: product market fit, technical resilience, and lightning-fast execution.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/5 rounded-full blur-[50px] group-hover:bg-brand-blue/10 transition-all duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand-blue flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 relative z-10">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-blue transition-colors duration-300 relative z-10 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-brand-slate text-base leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
