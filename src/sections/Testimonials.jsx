import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import person1 from '../assets/person_1-min.jpg';
import person2 from '../assets/person_2-min.jpg';
import person3 from '../assets/person_3-min.jpg';

const testimonials = [
  {
    quote: "We have collaborated with IKEN for a decade as a third-party software provider, during which time we have successfully executed numerous projects across various technology platforms and business domains. The company fosters professionalism and unwavering support as its core values.",
    author: "Waleed Kamel",
    role: "Managing Director – ContactCars.com",
    image: person1,
    rating: 5
  },
  {
    quote: "We have had the pleasure of utilizing the conference system developed by IKEN Technology for several years now, & it has been an absolute game-changer for our organization. This system has seamlessly facilitated our communication needs, enabling us to conduct meetings, webinars, and conferences with unparalleled ease & efficiency.",
    author: "Youssef Abdelrahman",
    role: "Corporate Senior Project Manager – EFG Hermes",
    image: person2,
    rating: 5
  },
  {
    quote: "Their approach to platform scalability saved us over 8 months of development time. They are the architects of our rapid 10x market growth.",
    author: "Mohammed Assem",
    role: "CTO & Co-founder – Balad",
    image: person3,
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container px-6 mx-auto">
        {/* Header with Badge and Nav */}
        <div className="flex justify-between items-center mb-16">
          <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-50 text-blue-500 border border-blue-100/50">
            Customer Says
          </span>
          
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="px-5 py-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all font-medium text-sm flex items-center gap-1"
            >
              Prev
            </button>
            <button 
              onClick={nextSlide}
              className="px-5 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all font-medium text-sm flex items-center gap-1"
            >
              Next
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Testimonial Item (Slider Logic could show two but typically one main as per design) */}
              {/* We show the current and next if available for a 'duo' look as in image, or just one focus */}
              <div className="grid md:grid-cols-2 gap-16 w-full">
                {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map((t, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                    <div className="space-y-2">
                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <h4 className="text-xl font-bold text-blue-500">{t.author}</h4>
                      <p className="text-sm font-medium text-gray-400">{t.role}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg italic">
                      “{t.quote}”
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#1e1b4b] scale-110' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
