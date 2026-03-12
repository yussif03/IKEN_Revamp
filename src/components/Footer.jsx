import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUpRight, Facebook } from 'lucide-react';

const Footer = () => {
  const links = {
    Company: ['Home', 'Careers', 'Partners', 'Contact'],
    Services: ['SaaS Development', 'Web Applications', 'Mobile Apps', 'AI Solutions'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  const socials = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/iken-tech/?originalSubdomain=eg' },
    { Icon: Facebook, href: 'https://www.facebook.com/IKEN.tech' },
    { Icon: Instagram, href: 'https://www.instagram.com/iken.tech' },
    { Icon: Twitter, href: 'https://x.com/iken_tech' }
  ];

  return (
    <footer className="footer-v2 bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="text-2xl font-black font-display tracking-tighter mb-8 text-brand-black">
              IKEN<span className="text-brand-blue">.</span>
            </div>
            <p className="text-brand-slate text-sm leading-relaxed mb-8 max-w-xs">
              Building the software infrastructure for the next generation of global innovators.
            </p>
          </div>
          
          {Object.entries(links).map(([title, items], i) => (
            <div key={i}>
              <h4 className="font-bold text-brand-black mb-6 uppercase tracking-widest text-xs">{title}</h4>
              <ul className="space-y-4">
                {items.map((item, j) => {
                  let href = "/#";
                  if (title === 'Services') href = "/#solutions";
                  if (item === 'Partners') href = "/#partners";
                  if (item === 'Contact') href = "/contact";
                  
                  return (
                    <li key={j}>
                      <a href={href} className="text-brand-slate text-sm hover:text-brand-blue transition-colors flex items-center group">
                        {item}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Social Media Column */}
          <div className="flex flex-col items-start">
            <h4 className="font-bold text-brand-black mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socials.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-brand-slate hover:text-brand-blue hover:border-brand-blue transition-all bg-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-slate text-sm">
            © {new Date().getFullYear()} Iken Technology. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-brand-slate text-xs hover:text-brand-black transition-colors">English (US)</a>
            <a href="#" className="text-brand-slate text-xs hover:text-brand-black transition-colors">Privacy Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
