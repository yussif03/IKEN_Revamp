import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Smartphone, Cpu, Box, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'SaaS Platforms',
    description: 'Highly scalable multi-tenant architectures built for performance and growth.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Applications',
    description: 'Dynamic, lightning-fast web experiences designed with modern frameworks.',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Applications',
    description: 'Native and cross-platform apps that provide seamless mobile experiences.',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI Solutions',
    description: 'Integrating advanced machine learning and AI to automate and optimize.',
    color: 'bg-pink-500/10 text-pink-600',
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'Custom Enterprise Systems',
    description: 'Robust internal tools and ERP systems tailored to complex business logic.',
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Cloud Infrastructure',
    description: 'Secure, resilient, and automated cloud deployments with zero downtime.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
];

const SolutionsGrid = () => {
  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-[-5%] w-[30%] h-[30%] bg-brand-blue/5 rounded-full blur-[100px] -z-10 animate-slow-drift" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-brand-purple/5 rounded-full blur-[100px] -z-10 animate-slow-drift" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] -z-20" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-extrabold text-brand-black mb-8 leading-[1.1] tracking-tight">
              We build solutions that <br /><span className="text-gradient">define industries.</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-slate leading-relaxed max-w-2xl">
              From early-stage startups to global enterprises, we provide the technical expertise to turn visionary ideas into market-ready products.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Aura on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${solution.color}`}>
                <div className="transition-transform duration-500 group-hover:rotate-[10deg]">
                  {solution.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-black mb-5 group-hover:text-brand-blue transition-colors duration-300">
                {solution.title}
              </h3>
              
              <p className="text-brand-slate leading-relaxed text-lg mb-8">
                {solution.description}
              </p>
              
              <div className="flex items-center gap-2 text-brand-black font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span>Explore Capability</span>
                <span className="w-10 h-[1px] bg-brand-black/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
