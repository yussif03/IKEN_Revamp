export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-0.5 mb-8">
                            <span className="inline-flex items-center justify-center w-8 h-8 font-black text-xl border-2 border-white text-white">I</span>
                            <span className="font-black tracking-tight text-xl ml-1 text-white">KEN</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-semibold mb-8 max-w-sm">
                            Connecting People and Build Technology. We turn complex problems into scalable digital solutions that drive business success.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current mask-contain" />
                                    {/* Note: In a real app we'd use icons here, using colored squares for now as proxies */}
                                    <div className="w-2 h-2 rounded-full bg-current" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-brand-blue">About Us</h4>
                        <ul className="space-y-4">
                            {['Company', 'Our Team', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-brand-blue">Explore</h4>
                        <ul className="space-y-4">
                            {['Services', 'Industries', 'Portfolio', 'Insights'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Bar */}
                    <div className="lg:col-span-4 bg-white/[0.03] p-8 rounded-3xl border border-white/[0.05]">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-blue-400">Main Office</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Visit Us</p>
                                    <p className="text-xs text-gray-400 font-medium leading-relaxed">Head Office: Egypt<br />Middle East Branch: Saudi Arabia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Email Us</p>
                                    <p className="text-xs text-gray-400 font-medium">info@iken.tech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
                        &copy; {currentYear} <span className="text-white">IKEN TECHNOLOGY</span>. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
