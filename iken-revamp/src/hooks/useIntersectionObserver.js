import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
        ...options,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

