import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Grid with Overlapping Effect */}
                    <div ref={ref} className={`relative lg:order-2 fade-right ${isVisible ? 'visible' : ''}`}>
                        {/* Primary Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 aspect-[4/3] border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                alt="IKEN Team Meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating Secondary Image */}
                        <div className="absolute -bottom-10 -left-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl z-20 aspect-video border-4 border-white hidden sm:block">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                                alt="Business Discussion"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute top-10 -right-8 z-30 bg-brand-blue p-6 rounded-2xl shadow-xl text-white transform rotate-3 flex items-center gap-4 border-2 border-white/20">
                            <span className="text-5xl font-black italic">10</span>
                            <div className="text-[10px] font-black uppercase leading-tight tracking-[0.2em]">
                                Years<br />Experience
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className={`lg:order-1 fade-left ${isVisible ? 'visible' : ''}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-brand-blue" />
                            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">About Our Company</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight mb-8">
                            Connecting People And<br />
                            <span className="text-brand-blue">Build Technology</span>
                        </h2>
                        <div className="p-8 bg-brand-gray rounded-2xl border-l-4 border-brand-blue mb-8">
                            <p className="text-gray-700 leading-relaxed font-medium">
                                We turn technology into business transformation. We consult, develop, implement and manage integrated technology solutions that reshape the digital productivity of customers in private and public sectors.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'All In One IT Solution Company',
                                'Quality Solution For Business',
                                'Amazing Expert Teams',
                                '24/7 Quick Supports',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-black text-brand-dark tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex items-center gap-4">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-brand-dark text-white font-black tracking-widest text-[12px] uppercase rounded hover:bg-brand-blue shadow-lg transition-all duration-300"
                            >
                                Learn More About Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
