import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Scaling React Applications in 2025',
    category: 'Engineering',
    date: 'Dec 12, 2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'The Future of AI-Driven Development',
    category: 'Technology',
    date: 'Nov 28, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'Defining Product Strategy for Startups',
    category: 'Product',
    date: 'Oct 15, 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=500'
  },
];

const Insights = () => {
  return (
    <section id="insights" className="section-padding bg-white">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-black mb-4">Latest Insights.</h2>
            <p className="text-brand-slate">Expert perspectives on tech, product, and growth.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-3">{article.category} • {article.date}</p>
              <h3 className="text-2xl font-bold text-brand-black group-hover:text-brand-blue transition-colors leading-tight mb-4">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
