import { useEffect, useState } from 'react';

/**
 * Counts from 0 to `target` over `duration` ms using easeOutQuad.
 * Starts counting when `shouldStart` is true.
 */
export function useCountUp(target, duration = 2000, shouldStart = false, delay = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let rafId;

    const timer = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuad: same curve as original
        const eased = 1 - (1 - progress) * (1 - progress);
        setCount(Math.floor(eased * target));

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, [shouldStart, target, duration, delay]);

  return count;
}
