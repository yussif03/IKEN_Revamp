import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-black rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden group"
        >
          {/* Animated Background Orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-purple/30 transition-colors duration-1000" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-indigo/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 relative z-10 leading-tight">
            Let’s build your next <br /> <span className="text-brand-blue">big idea.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
            Join 100+ innovative companies building the future with Iken. Our experts are ready to transform your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-black rounded-full font-bold text-lg hover:bg-brand-blue hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
