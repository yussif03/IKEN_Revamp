import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg-2.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-brand-black">
      {/* Background Image Layer - Sharp & Deep */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
        />
        
        {/* Dark Overlay - Matches ProductShowcase.jsx background */}
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black" />
        
        {/* Kinetic Light Beam - Slow horizontal sweep */}
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent skew-x-12"
        />

        {/* Premium Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Decorative Brand Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1] pointer-events-none opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/30 rounded-full blur-[120px] animate-slow-drift" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/30 rounded-full blur-[120px] animate-slow-drift" style={{ animationDelay: '5s' }} />
      </div>

      <div className="container px-6 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-blue/20 text-brand-blue border border-brand-blue/20 backdrop-blur-md">
            The Future of Software Development
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-white max-w-5xl mx-auto tracking-tight">
            Experience the next era of <br /><span className="text-gradient">digital engineering.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We build high-performance, scalable SaaS platforms and custom enterprise solutions that power modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-black rounded-full font-bold text-lg hover:bg-brand-blue hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#work" className="px-10 py-5 bg-brand-black text-white rounded-full font-bold text-lg hover:bg-brand-blue transition-all hover:scale-105 active:scale-95 flex items-center gap-3 border border-white/10 backdrop-blur-sm">
              Recent projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
