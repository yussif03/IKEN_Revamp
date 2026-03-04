import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const clients = [
    'TRUSTED CLIENT 1',
    'TRUSTED CLIENT 2',
    'TRUSTED CLIENT 3',
    'TRUSTED CLIENT 4',
    'TRUSTED CLIENT 5',
    'TRUSTED CLIENT 6',
];

export default function TrustedClients() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="py-20 bg-white border-b border-gray-50">
            <div className="container-wide">
                <div
                    ref={ref}
                    className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700"
                >
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className={`text-sm font-black text-brand-dark tracking-[0.2em] fade-up ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
