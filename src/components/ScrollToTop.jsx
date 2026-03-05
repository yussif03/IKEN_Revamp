import { useEffect, useRef, useState, useCallback } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const debounceTimerRef = useRef(null)

    const checkScrollTop = useCallback(() => {
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current)
        }

        debounceTimerRef.current = setTimeout(() => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }, 50) // Small debounce for performance without feeling laggy
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop, { passive: true })
        checkScrollTop() // Check on initial mount

        return () => {
            window.removeEventListener('scroll', checkScrollTop)
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current)
            }
        }
    }, [checkScrollTop])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinelinejoin="round"
            >
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </button>
    )
}

export default ScrollToTop
