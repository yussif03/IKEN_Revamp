import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="py-24 bg-brand-blue relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="hexCTA" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                        <polygon points="40,2 76,22 76,62 40,82 4,62 4,22" fill="none" stroke="#ffffff" strokeWidth="2" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hexCTA)" />
                </svg>
            </div>

            <div className="absolute top-0 right-0 w-[500px] h-full bg-brand-dark/10 -skew-x-12 translate-x-1/2" />

            <div ref={ref} className="container-wide relative z-10 text-center">
                <h2 className={`text-4xl md:text-6xl font-black text-white mb-8 leading-tight fade-up ${isVisible ? 'visible' : ''}`}>
                    Ready to Modernize Your<br />Computer &amp; Business?
                </h2>
                <p className={`text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
                    Join 50+ happy clients who have transformed their operations with IKEN technology solutions.
                </p>
                <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                    <a
                        href="#contact"
                        className="inline-block px-12 py-6 bg-brand-dark text-white font-black tracking-[0.2em] text-[13px] uppercase rounded-xl shadow-2xl hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-2"
                    >
                        Get a Free Quote Now
                    </a>
                </div>
            </div>
        </section>
    );
}
