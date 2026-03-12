import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ArrowRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const subjects = [
  'General Inquiry',
  'Project Discussion',
  'Partnership Opportunity',
  'Technical Support',
  'Career & Recruitment',
  'Other',
];

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const serviceId = 'service_ocpfe3j';
    const templateId = 'template_2ki8571';
    const publicKey = 'a9YRMXYvExEl2KypK';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', phone: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[120px] animate-slow-drift" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-[120px] animate-slow-drift" style={{ animationDelay: '5s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-brand-blue/10 text-brand-blue">
            Let's build together
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black mb-6">
            Start a <span className="text-gradient">conversation.</span>
          </h1>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed">
            Have a game-changing idea or a complex engineering challenge? 
            Our team is ready to help you build the future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between p-10 rounded-[2.5rem] bg-brand-black text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
            
            <div className="space-y-12 relative z-10">
              <div>
                <h2 className="text-3xl font-extrabold mb-4">Cairo Office</h2>
                <p className="text-gray-400 text-lg">We'd love to host you for a coffee and discuss your goals.</p>
              </div>

              <div className="space-y-8">
                {/* Phone & Email */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-standard group-hover:bg-brand-blue group-hover:scale-110">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Contact</h4>
                    <a href="https://wa.me/201050500017" className="block text-xl font-bold hover:text-brand-blue transition-colors">(+20) 105 0500017</a>
                    <a href="mailto:yussifmoh.dev@gmail.com" className="block text-gray-300 hover:text-white transition-standard">contact@iken.tech</a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-standard group-hover:bg-brand-blue group-hover:scale-110">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">HQ Address</h4>
                    <p className="text-xl font-bold leading-snug">
                      24z, Tharwat Abu El Goukh St,<br /> Maadi, Cairo, Egypt
                    </p>
                  </div>
                </div>

                {/* Work Time */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-standard group-hover:bg-brand-blue group-hover:scale-110">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-xl font-bold">9:00AM – 5:00PM</p>
                    <p className="text-gray-300">Sunday – Thursday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-12 opacity-20">
              <span className="text-8xl font-black tracking-tighter">IKEN.</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="glass p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/60 bg-white/80 relative">
              <h3 className="text-2xl font-bold text-brand-black mb-8">Send us a message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-slate px-1">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-standard"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-slate px-1">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+20 000 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-standard"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-slate px-1">What are you looking for?</label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-standard text-brand-black cursor-pointer"
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-slate">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-slate px-1">Message Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-standard resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full group py-5 rounded-2xl"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    )}
                  </button>

                  {/* Feedback Tooltips */}
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-2xl bg-green-50 text-green-700 flex items-center gap-3 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Message sent successfully! We'll be in touch soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-2xl bg-red-50 text-red-700 flex items-center gap-3 font-medium"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
