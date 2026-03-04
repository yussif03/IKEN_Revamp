import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
    {
        title: 'Contact Cars',
        category: 'Enterprise Solution',
        img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    },
    {
        title: 'Furn',
        category: 'E-commerce Platform',
        img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    },
    {
        title: 'Home Care',
        category: 'Mobile Application',
        img: 'https://images.unsplash.com/photo-1581578731522-638df752e274?w=800&q=80',
    },
    {
        title: 'Moqawalat',
        category: 'Construction Portal',
        img: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?w=800&q=80',
    },
];

export default function RecentProjects() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="projects" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />

            <div className="container-wide relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className={`fade-left ${isVisible ? 'visible' : ''}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-brand-blue" />
                            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">Latest Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Recent Projects</h2>
                    </div>
                    <div className={`fade-right ${isVisible ? 'visible' : ''}`}>
                        <p className="text-white/50 max-w-md font-medium">
                            We deliver cutting-edge technology solutions that drive growth and innovation for our diverse portfolio of clients.
                        </p>
                    </div>
                </div>

                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className={`group relative overflow-hidden rounded-3xl bg-brand-light aspect-[4/5] fade-up ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* Image with 500ms Smooth Transition logic as requested */}
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-8 left-8 right-8">
                                    <p className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-2">{project.category}</p>
                                    <h3 className="text-xl font-black text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                                    <a href="#" className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest hover:text-brand-blue transition-colors">
                                        View Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-20 text-center fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                    <p className="text-white/30 text-xs font-black uppercase tracking-[0.3em] inline-block border border-white/10 px-6 py-3 rounded-full">
                        Providing full range of high services
                    </p>
                </div>
            </div>
        </section>
    );
}
