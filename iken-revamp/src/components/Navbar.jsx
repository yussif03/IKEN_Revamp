import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Products', href: '#products' },
    { label: 'Clients & Partners', href: '#clients' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo with Box Style */}
                    <a href="#home" className="flex items-center gap-0.5 group">
                        <span className="flex items-center">
                            <span className={`inline-flex items-center justify-center w-8 h-8 font-black text-xl border-2 transition-colors duration-300 ${scrolled ? 'border-brand-dark text-brand-dark' : 'border-white text-white'}`}>
                                I
                            </span>
                            <span className={`font-black tracking-tight text-xl ml-1 transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                                KEN
                            </span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-300 relative group ${scrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-brand-blue' : 'bg-white'}`} />
                            </a>
                        ))}
                    </nav>

                    {/* Portfolio CTA */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="#projects"
                            className={`px-6 py-2.5 rounded text-[12px] font-black tracking-widest uppercase transition-all duration-300 ${scrolled
                                    ? 'bg-brand-dark text-white hover:bg-brand-blue shadow-md'
                                    : 'bg-white text-brand-dark hover:bg-brand-light'
                                }`}
                        >
                            OUR PORTFOLIO
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
                    }`}
            >
                <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
                <div className={`absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl p-8 flex flex-col transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between mb-10">
                        <span className="flex items-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 font-black text-xl border-2 border-brand-dark text-brand-dark">I</span>
                            <span className="font-black tracking-tight text-xl ml-1 text-brand-dark">KEN</span>
                        </span>
                        <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-brand-dark">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-bold text-gray-800 hover:text-brand-blue border-b border-gray-50 pb-2 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <a
                            href="#projects"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center w-full px-6 py-4 rounded bg-brand-dark text-white font-black tracking-widest text-xs uppercase shadow-lg"
                        >
                            OUR PORTFOLIO
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
