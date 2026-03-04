import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const subjects = [
  'General Inquiry',
  'Project Discussion',
  'Partnership Opportunity',
  'Technical Support',
  'Career & Recruitment',
  'Other',
]

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container">
        {/* ── Page header ── */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Get in Touch
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Talk to Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Have a project in mind or need expert advice? We're ready to help you take
            the next step.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">

          {/* ── Left: Info card ── */}
          <div className="flex flex-col justify-between rounded-2xl bg-sky-900 p-8 text-white lg:w-[42%]">
            <div>
              <h2 className="text-xl font-bold">Cairo Office Address</h2>
              <p className="mt-1 text-sm text-sky-200">
                We would like to hear from you
              </p>

              {/* Phone & Email */}
              <div className="mt-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Phone Number &amp; Email</p>
                  <p className="mt-0.5 text-sm text-sky-200">(+20) 105 0500017</p>
                  <p className="text-sm text-sky-200">contact@iken.tech</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Our Office Address</p>
                  <p className="mt-0.5 text-sm text-sky-200">
                    24z, Tharwat Abu El Goukh Street,
                  </p>
                  <p className="text-sm text-sky-200">Maadi, Cairo, Egypt</p>
                </div>
              </div>

              {/* Work Time */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Official Work Time</p>
                  <p className="mt-0.5 text-sm text-sky-200">
                    9:00AM – 5:00PM (Sun – Thu)
                  </p>
                  <p className="text-sm text-sky-200">Fri, Sat &amp; Holiday Closed</p>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="relative mt-10 h-24 overflow-hidden">
              <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full border border-white/20" />
              <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full border border-white/10" />
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div className="flex-1 rounded-2xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Leave a Message</h2>
            <p className="mt-1 text-sm text-slate-500">We're Ready To Help You</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name + Phone */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Subject dropdown */}
              <div className="relative">
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="" disabled>
                    Select subject
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {/* custom caret */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  ▾
                </span>
              </div>

              {/* Message */}
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Type Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 resize-none"
              />

              {/* Submit */}
              <div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky-800"
                >
                  Submit Message
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
