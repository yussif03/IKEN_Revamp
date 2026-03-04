import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
    {
        value: 20,
        suffix: '+',
        label: 'Successful Projects',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        value: 10,
        suffix: '+',
        label: 'Years of Experience',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        value: 6,
        suffix: '+',
        label: 'Countries Served',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        value: 50,
        suffix: '+',
        label: 'Happy Clients',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

function StatItem({ value, suffix, label, icon, delay, shouldStart }) {
    // Exact 2000ms duration with easeOutQuad logic as requested
    const count = useCountUp(value, 2000, shouldStart, delay);

    return (
        <div
            className={`relative group flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-premium transition-all duration-500 hover:shadow-premium-hover hover:-translate-y-2 fade-up ${shouldStart ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110">
                {icon}
            </div>
            <div className="mt-4 text-center">
                <p className="text-5xl font-black text-brand-dark tabular-nums flex items-baseline justify-center">
                    {count}
                    <span className="text-2xl text-brand-blue ml-0.5">{suffix}</span>
                </p>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mt-2">
                    {label}
                </p>
            </div>
        </div>
    );
}

export default function Statistics() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="stats" className="py-24 bg-gray-50 overflow-visible">
            <div className="container-wide">
                <div
                    ref={ref}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
                >
                    {stats.map((stat, i) => (
                        <StatItem
                            key={stat.label}
                            {...stat}
                            delay={i * 150}
                            shouldStart={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
