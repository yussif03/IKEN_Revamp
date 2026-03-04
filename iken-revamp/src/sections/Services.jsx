import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
    {
        title: 'Software Development',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
    },
    {
        title: 'Enterprise Solutions',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" />
            </svg>
        ),
        img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80',
    },
    {
        title: 'Software Support',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80',
    },
    {
        title: 'Team as a Service',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&q=80',
    },
    {
        title: 'Software Consulting',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=500&q=80',
    },
];

function ServiceCard({ service, index, isVisible }) {
    return (
        <div
            className={`group relative perspective-1000 fade-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-premium transition-all duration-700 group-hover:shadow-premium-hover group-hover:-translate-y-3 cursor-pointer">
                {/* Card Image */}
                <div className="h-64 sm:h-56 overflow-hidden">
                    <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors duration-500" />
                </div>

                {/* Icon Floating Overlay */}
                <div className="absolute top-[230px] sm:top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-brand-blue border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                        {service.icon}
                    </div>
                </div>

                {/* Content Area */}
                <div className="pt-14 pb-8 px-6 text-center">
                    <h3 className="text-sm font-black text-brand-dark uppercase tracking-wider group-hover:text-brand-blue transition-colors">
                        {service.title}
                    </h3>
                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest border-b-2 border-brand-blue pb-0.5">Learn More →</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="services" className="py-24 bg-brand-gray relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[100px] -z-10" />

            <div className="container-wide">
                <div className="max-w-xl mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-[2px] bg-brand-blue" />
                        <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">Featured Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                        We Provide Great IT &amp; Business Solutions
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {services.map((s, i) => (
                        <ServiceCard key={s.title} service={s} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
}
