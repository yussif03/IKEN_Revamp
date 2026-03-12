import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

import client1 from '../assets/trusted-clients-1.jpg';
import client2 from '../assets/trusted-clients-2.jpg';
import client3 from '../assets/trusted-clients-3.jpg';
import client4 from '../assets/trusted-clients-4.jpg';
import client5 from '../assets/trusted-clients-5.jpg';
import client6 from '../assets/trusted-clients-6.jpg';
import client7 from '../assets/trusted-clients-7.jpg';
import client8 from '../assets/trusted-clients-8.jpg';
import client9 from '../assets/trusted-clients-9.jpg';
import client10 from '../assets/trusted-clients-10.jpg';
import client11 from '../assets/trusted-clients-11.jpg';

const logos = [
  client1, client2, client3, client4, client5, 
  client6, client7, client8, client9, client10, client11
];

const stats = [
  { label: 'Successful Projects', value: '20+', number: 20, suffix: '+' },
  { label: 'Years Experience', value: '10+', number: 10, suffix: '+' },
  { label: 'Countries Served', value: '6+', number: 6, suffix: '+' },
  { label: 'Happy Clients', value: '50+', number: 50, suffix: '+' },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <h3 ref={ref} className="text-4xl font-extrabold text-brand-black mb-2">
      <motion.span>{rounded}</motion.span>{suffix}
    </h3>
  );
};

const TrustProof = () => {
  return (
    <section id="partners" className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container px-6 mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-brand-blue font-bold uppercase tracking-[0.2em] text-sm mb-6">
            Establishing Excellence
          </p>
          <h2 className="text-4xl md:text-7xl font-extrabold text-brand-black mb-8 leading-[1.1] tracking-tight">
            Our <span className="text-gradient">Trusted Clients.</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Trusted by innovative companies worldwide to deliver high-performance software infrastructure.
          </p>
        </motion.div>
      </div>
      
      {/* Logo Marquee Animation */}
      <div className="w-full relative py-4 mb-20">
        {/* Optional fading edges for smoothness */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Duplicate the logos array twice to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="px-8 md:px-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-standard"
            >
              <img 
                src={logo} 
                alt={`Trusted Client ${index}`} 
                className="h-12 md:h-16 w-auto object-contain max-w-[150px] mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gray-50/50 border border-gray-100/50 hover-card-lift"
            >
              <Counter value={stat.number} suffix={stat.suffix} />
              <p className="text-brand-slate font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof;
