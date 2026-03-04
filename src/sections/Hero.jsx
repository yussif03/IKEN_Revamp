// import SectionWrapper from '../components/SectionWrapper'

// const Hero = () => {
//   return (
//     <SectionWrapper
//       id="hero"
//       className="bg-slate-950 text-white"
//       padding="pt-24 pb-20 md:pt-32 md:pb-24"
//     >
//       <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
//         <div className="space-y-6 md:space-y-7">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
//             Digital Transformation Partner
//           </p>
//           <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
//             Building reliable software that moves your business forward.
//           </h1>
//           <p className="max-w-xl text-sm text-slate-300 md:text-base">
//             IKEN Technology combines consulting, engineering, and long‑term support to deliver
//             web, mobile, and enterprise solutions that are robust, scalable, and ready for growth.
//           </p>
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//             <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-sky-400">
//               Schedule a consultation
//             </button>
//             <button className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-200">
//               View recent projects
//             </button>
//           </div>
//         </div>
//         <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.9)] md:p-7">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
//             What we deliver
//           </p>
//           <div className="space-y-4 text-sm text-slate-200">
//             <p className="flex items-start gap-3">
//               <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
//               <span>End‑to‑end web and mobile products built for reliability and scale.</span>
//             </p>
//             <p className="flex items-start gap-3">
//               <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
//               <span>Enterprise solutions that streamline operations and unlock new value.</span>
//             </p>
//             <p className="flex items-start gap-3">
//               <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
//               <span>Dedicated teams that integrate with your business and ship faster.</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   )
// }

// export default Hero

import { Link } from 'react-router-dom'
import SectionWrapper from '../components/SectionWrapper'
import heroBg from '../assets/hero-bg-2.jpg'

const Hero = () => {
  return (
    <SectionWrapper
      id="hero"
      className="text-white"
      padding="pt-24 pb-20 md:pt-32 md:pb-24"
      style={{
        backgroundImage: `
          linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.85)),
          url(${heroBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        
        <div className="space-y-6 md:space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Digital Transformation Partner
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Building reliable software that moves your business forward.
          </h1>

          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            IKEN Technology combines consulting, engineering, and long-term support to deliver
            web, mobile, and enterprise solutions that are robust, scalable, and ready for growth.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Schedule a consultation
            </Link>

            <a
              href="/#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-200"
            >
              View recent projects
            </a>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.9)] md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            What we deliver
          </p>

          <div className="space-y-4 text-sm text-slate-200">
            <p className="flex items-start gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>End-to-end web and mobile products built for reliability and scale.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Enterprise solutions that streamline operations and unlock new value.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Dedicated teams that integrate with your business and ship faster.</span>
            </p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}

export default Hero
