import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import showcaseMobile from '../assets/showcase_mobile.png';

const ProductShowcase = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="showcase" className="relative py-24 lg:py-48 bg-brand-black overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Designed for the <span className="text-brand-blue">most demanding</span> users.
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              We obsess over every pixel and every line of code. Our products are built to be intuitive, fast, and remarkably beautiful.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Pixel Perfect UI', desc: 'Crafted with precision using the latest design systems.' },
                { title: 'Ultra-fast Core', desc: 'Optimized for sub-second response times and high concurrency.' },
                { title: 'Global Edge', desc: 'Deployed across a worldwide network for instant access.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[600px] lg:h-[800px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -z-10" />
            
            <motion.div 
              style={{ y: y1 }}
              className="relative z-20 w-[300px] lg:w-[350px]"
            >
              <div className="glass-dark p-2 rounded-[3rem] shadow-2xl border border-white/10">
                <img 
                  src={showcaseMobile} 
                  alt="Mobile UI Showcase" 
                  className="rounded-[2.5rem] shadow-inner"
                />
              </div>
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-20 right-0 lg:-right-20 w-[250px] lg:w-[300px] opacity-60 grayscale scale-90"
            >
              <div className="glass-dark p-2 rounded-[3rem] shadow-2xl border border-white/10">
                <img 
                  src={showcaseMobile} 
                  alt="Mobile UI Background" 
                  className="rounded-[2.5rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
