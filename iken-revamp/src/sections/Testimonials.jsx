import { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

const testimonials = [
    {
        img: testimonial1,
        name: 'Waleed Kamel',
        role: 'Managing Director',
        company: 'Contact Cars',
        quote:
            'We have collaborated with IKEN for a decade as a third-party software provider, during which time we have successfully executed numerous projects across various technology platforms and business domains. The company fosters professionalism and unwavering support as its core values.',
        stars: 5,
    },
    {
        img: testimonial2,
        name: 'Youssef Abdelrahman',
        role: 'Corporate Senior Project Manager',
        company: 'EFG Hermes',
        quote:
            'We have had the pleasure of utilizing the conference system developed by IKEN Technology for several years now, & it has been an absolute game-changer for our organization. This system has seamlessly facilitated our communication needs, enabling us to conduct meetings, webinars, and conferences with unparalleled ease & efficiency.',
        stars: 5,
    },
    {
        img: testimonial3,
        name: 'Mohammed Assem',
        role: 'CTO & Co-founder',
        company: 'Balad',
        quote:
            'IKEN Technology has truly exceeded our expectations. Their customized software solutions have not only streamlined our operations but also provided a significant boost in productivity. The team\'s responsiveness and commitment to delivering high-quality products have made our collaboration seamless. We highly recommend IKEN Technology for anyone seeking reliable and innovative software solutions.',
        stars: 5,
    },
];

function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white rounded-3xl shadow-premium p-8 h-full flex flex-col border border-gray-50 transition-all duration-500 hover:shadow-premium-hover group">
            <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                    <div className="absolute -inset-1 bg-brand-blue/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white relative z-10"
                    />
                </div>
                <div>
                    <h4 className="font-black text-brand-dark text-sm tracking-tight">{testimonial.name}</h4>
                    <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mt-0.5">{testimonial.company}</p>
                    <div className="flex gap-0.5 mt-1.5">
                        {[...Array(testimonial.stars)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-brand-gold fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative flex-1">
                <svg className="absolute -top-3 -left-2 w-10 h-10 text-brand-blue/5" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.314 0-6 2.686-6 6 0 1.105.448 2.105 1.172 2.828l-0.172 0.172c-2.4 2.4-2.4 6.2 0 8.6s6.2 2.4 8.6 0l4.4-4.4c1.172-1.172 1.828-2.73 1.828-4.4 0-3.314-2.686-6-6-6zM22 8c-3.314 0-6 2.686-6 6 0 1.105.448 2.105 1.172 2.828l-0.172 0.172c-2.4 2.4-2.4 6.2 0 8.6s6.2 2.4 8.6 0l4.4-4.4c1.172-1.172 1.828-2.73 1.828-4.4 0-3.314-2.686-6-6-6z" />
                </svg>
                <p className="text-gray-600 text-[13px] leading-relaxed italic z-10 relative">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });
    const total = testimonials.length;

    const next = () => setCurrent((c) => (c + 1) % total);
    const prev = () => setCurrent((c) => (c - 1 + total) % total);

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container-wide">
                <div ref={ref} className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-up ${isVisible ? 'visible' : ''}`}>
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-8 h-[2px] bg-brand-blue" />
                            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">Testimonials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark">Customer Says</h2>
                        <p className="text-gray-400 mt-2 font-medium">Voices of trust from our global partnerships</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-14 h-14 rounded-full border-2 border-brand-light flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                            aria-label="Previous"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-dark shadow-lg shadow-brand-blue/30 transition-all duration-300"
                            aria-label="Next"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Grid (3/row) */}
                <div className="hidden lg:grid grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
                            <TestimonialCard testimonial={t} />
                        </div>
                    ))}
                </div>

                {/* Tablet/Mobile Slider */}
                <div className="lg:hidden relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonials.map((t, i) => (
                            <div key={i} className="min-w-full px-2">
                                <TestimonialCard testimonial={t} />
                            </div>
                        ))}
                    </div>
                    {/* Slider Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-brand-blue' : 'w-2 bg-gray-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
