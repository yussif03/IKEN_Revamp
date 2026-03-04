import { useEffect, useState } from 'react';

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark"
        >
            {/* Background with Hexagon Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexHero" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                            <polygon points="40,2 76,22 76,62 40,82 4,62 4,22" fill="none" stroke="#ffffff" strokeWidth="2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexHero)" />
                </svg>
            </div>

            {/* Decorative Gradient Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[150px] rounded-full" />

            <div className="relative container-wide pt-32 pb-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Content Column */}
                    <div
                        className={`lg:col-span-7 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-brand-blue" />
                            <span className="text-white text-xs font-black uppercase tracking-[0.3em] font-inter">
                                Solve Problems, Change Lives
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
                            Clear Thinking<br />
                            <span className="text-white font-light">Makes</span>{' '}
                            <span className="text-blue-400">Bright Future!</span>
                        </h1>
                        <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
                            We empower businesses through intelligent digital transformation.
                            Our expert consultants turn complex technology into your competitive advantage.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <a
                                href="#contact"
                                className="px-10 py-5 bg-brand-blue text-white font-black tracking-widest text-[13px] uppercase rounded shadow-2xl hover:bg-brand-dark transition-all duration-300 transform hover:-translate-y-1"
                            >
                                REQUEST MORE INFO
                            </a>
                            <a
                                href="#services"
                                className="px-10 py-5 border-2 border-white/20 text-white font-black tracking-widest text-[13px] uppercase rounded hover:bg-white/10 transition-all duration-300"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>

                    {/* Image Card Column */}
                    <div
                        className={`lg:col-span-5 relative transition-all duration-1000 ease-out delay-300 ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                            }`}
                    >
                        {/* Main Interactive Image Frame */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-3xl -z-10 transition-transform duration-700 group-hover:scale-105" />
                            <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/5] border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90"
                                    alt="IKEN Business Professionals"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                        <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-sm uppercase tracking-tight">20+ Projects Delivered</p>
                                            <p className="text-blue-100/70 text-xs font-semibold">Across 6+ Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-white fill-current">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
}
