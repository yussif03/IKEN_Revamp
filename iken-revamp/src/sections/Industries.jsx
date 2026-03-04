import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
    {
        name: 'Healthcare',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        name: 'Finance',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        name: 'Government',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" />
            </svg>
        ),
    },
    {
        name: 'Education',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
    },
    {
        name: 'Retail',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
    {
        name: 'Manufacturing',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.703 2.109a2 2 0 01-1.9 1.365H9.414a2 2 0 01-1.9-1.365l-.703-2.109a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-2.109 2.109a2 2 0 01-2.828 0l-5.656-5.656a2 2 0 010-2.828l2.109-2.109a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96l-2.109-.703a2 2 0 01-1.365-1.9V9.414a2 2 0 011.365-1.9l2.109-.703a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022l-2.109-2.109a2 2 0 010-2.828l5.656-5.656a2 2 0 012.828 0l2.109 2.109z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        name: 'Telecom',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.192 9.192 0 0112.142 0M2.929 6.515a13.435 13.435 0 0118.142 0" />
            </svg>
        ),
    },
    {
        name: 'Real Estate',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
];

export default function Industries() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="industries" className="py-24 bg-brand-gray relative">
            <div className="container-wide">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-[2px] bg-brand-blue" />
                        <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">Industries We Serve</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6">
                        Transforming Businesses Across Industries
                    </h2>
                    <p className="text-gray-500 font-medium leading-relaxed">
                        Our technology solutions are tailored for diverse sectors, helping organizations modernize and scale with confidence.
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {industries.map((industry, i) => (
                        <div
                            key={industry.name}
                            className={`group bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-premium hover:-translate-y-2 fade-up ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="w-20 h-20 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white shadow-inner">
                                {industry.icon}
                            </div>
                            <h3 className="text-sm font-black text-brand-dark uppercase tracking-wider group-hover:text-brand-blue transition-colors">
                                {industry.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
