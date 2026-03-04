import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
    {
        num: '01',
        title: 'Analysis',
        text: 'Understanding what the software needs to do and who will be using it',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'We Build and Create',
        text: 'Take an idea and turn it into a working product that people can use',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Faster Delivery',
        text: 'Break down the development process into small, iterative cycles to ensure faster delivery',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

export default function WorkProcess() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="process" className="py-24 bg-white relative">
            <div className="container-wide">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-8 h-[2px] bg-brand-blue" />
                        <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">Our Work Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark">Work With Planning</h2>
                </div>

                <div ref={ref} className="relative">
                    {/* Animated Connecting Line */}
                    <div className="absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-gray-100 hidden lg:block overflow-hidden">
                        <div
                            className="h-full bg-brand-blue transition-all duration-1000 ease-out origin-left"
                            style={{ width: isVisible ? '100%' : '0%' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, i) => (
                            <div
                                key={step.num}
                                className={`flex flex-col items-center text-center fade-up ${isVisible ? 'visible' : ''}`}
                                style={{ transitionDelay: `${i * 300}ms` }}
                            >
                                {/* Step Circle */}
                                <div className="relative mb-8">
                                    <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white text-[12px] font-black absolute -top-2 -right-2 shadow-lg ring-4 ring-white z-20">
                                        {step.num}
                                    </div>
                                    <div className="w-32 h-32 rounded-3xl bg-white border border-gray-100 shadow-premium flex items-center justify-center text-brand-blue transition-all duration-500 hover:shadow-premium-hover hover:border-brand-blue/20 hover:-translate-y-2">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-brand-dark mb-4">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] font-medium">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
