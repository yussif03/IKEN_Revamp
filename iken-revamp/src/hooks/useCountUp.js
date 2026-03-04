import { useEffect, useState } from 'react'

export function useCountUp(target, options = {}) {
  const { duration = 2000, start = false } = options
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let frameId
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
      const next = Math.round(target * eased)
      setValue(next)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [target, duration, start])

  return value
}

