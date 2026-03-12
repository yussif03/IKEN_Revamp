import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[120px] animate-slow-drift" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-[120px] animate-slow-drift" style={{ animationDelay: '5s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="container max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <span className="text-[12rem] md:text-[16rem] font-extrabold leading-none tracking-tighter text-brand-black/5 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="bg-brand-blue/10 backdrop-blur-md border border-brand-blue/20 rounded-2xl px-6 py-2 transform rotate-[-5deg] shadow-xl"
            >
              <span className="text-xl md:text-2xl font-bold text-brand-blue">Page not found</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
            Even the <span className="text-gradient">best journeys</span> hit a dead end.
          </h1>
          <p className="text-lg md:text-xl text-brand-slate max-w-lg mx-auto mb-12 leading-relaxed">
            The link you followed might be broken, or the page may have been moved. Let's get you back on the right track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary group w-full sm:w-auto">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
