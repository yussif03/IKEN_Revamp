import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import {
  FileText,
  Clock,
  Unplug,
  Workflow,
  Cloud,
  Link2,
  GripVertical,
} from 'lucide-react'

/* ─── content data ─── */
const beforeItems = [
  {
    icon: FileText,
    title: 'Manual Processes',
    description:
      'Teams rely on spreadsheets, paperwork, and manual approvals that slow productivity.',
  },
  {
    icon: Clock,
    title: 'Slow Systems',
    description: 'Legacy systems cause delays and limit scalability.',
  },
  {
    icon: Unplug,
    title: 'Disconnected Tools',
    description:
      'Multiple tools operate independently with no unified data flow.',
  },
]

const afterItems = [
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description:
      'Business processes are streamlined through intelligent automation.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Systems',
    description:
      'Applications run on secure and scalable cloud infrastructure.',
  },
  {
    icon: Link2,
    title: 'Integrated Platforms',
    description:
      'Systems communicate seamlessly with unified data and workflows.',
  },
]

/* ─── info item ─── */
const InfoItem = ({ icon: Icon, title, description, index, variant }) => {
  const isBefore = variant === 'before'
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-110 ${
          isBefore
            ? 'bg-slate-100 text-slate-500'
            : 'bg-sky-50 text-sky-700'
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <h4
          className={`text-sm font-semibold md:text-base ${
            isBefore ? 'text-slate-700' : 'text-slate-900'
          }`}
        >
          {title}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-500 md:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

/* ─── main section ─── */
const BeforeAfter = () => {
  const sliderRef = useRef(null)
  const isDragging = useRef(false)
  const [pos, setPos] = useState(50)

  /* ── pointer helpers ── */
  const getPercent = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const pct = ((clientX - rect.left) / rect.width) * 100
    return Math.min(90, Math.max(10, pct))
  }, [])

  const onPointerDown = useCallback(
    (e) => {
      isDragging.current = true
      setPos(getPercent(e.clientX))
      e.currentTarget.setPointerCapture(e.pointerId)
    },
    [getPercent],
  )

  const onPointerMove = useCallback(
    (e) => {
      if (!isDragging.current) return
      setPos(getPercent(e.clientX))
    },
    [getPercent],
  )

  const onPointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <SectionWrapper id="transformation" className="bg-white">
      <div className="space-y-12">
        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4">
            Digital Transformation
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Before and After Digital Transformation
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            See how digital transformation modernizes business operations by
            replacing manual processes with scalable, automated, and integrated
            systems.
          </p>
        </motion.div>

        {/* ── comparison container ── */}
        <div className="mx-auto max-w-5xl">
          <div
            ref={sliderRef}
            className="relative h-[480px] md:h-[400px] w-full select-none overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            style={{ touchAction: 'none' }}
          >
            {/* ═══ BEFORE layer (full width, sits behind) ═══ */}
            <div className="absolute inset-0 bg-slate-50">
              {/* label */}
              <span className="absolute left-4 top-4 z-20 rounded-full bg-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                Before
              </span>

              {/* content */}
              <div className="flex h-full flex-col justify-center gap-6 px-6 md:gap-8 md:px-12 py-14">
                {beforeItems.map((item, i) => (
                  <InfoItem
                    key={item.title}
                    index={i}
                    variant="before"
                    {...item}
                  />
                ))}
              </div>
            </div>

            {/* ═══ AFTER layer (clipped from the right) ═══ */}
            <div
              className="absolute inset-0 bg-white"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              {/* label */}
              <span className="absolute right-4 top-4 z-20 rounded-full bg-sky-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-700">
                After
              </span>

              {/* content — right-aligned */}
              <div className="flex h-full flex-col items-end justify-center gap-6 px-6 md:gap-8 md:px-12 py-14">
                <div className="flex w-full flex-col gap-6 md:gap-8 md:items-end md:text-right">
                  {afterItems.map((item, i) => (
                    <InfoItem
                      key={item.title}
                      index={i}
                      variant="after"
                      {...item}
                    />
                  ))}
                </div>
              </div>

              {/* subtle left border accent */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-sky-500" />
            </div>

            {/* ═══ SLIDER HANDLE ═══ */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >
              {/* vertical line */}
              <div className="h-full w-[2px] bg-slate-300" />

              {/* grab handle */}
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border border-slate-200 bg-white shadow-md active:cursor-grabbing active:scale-110 transition-transform duration-150">
                <GripVertical className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* helper text */}
          <p className="mt-3 text-center text-xs text-slate-400">
            Drag the slider to compare before and after
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default BeforeAfter
