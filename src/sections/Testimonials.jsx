import { useState, useEffect, useCallback, useRef } from 'react'
import './CustomerSays.css'

import person1 from '../assets/person_1-min.jpg'
import person2 from '../assets/person_2-min.jpg'
import person3 from '../assets/person_3-min.jpg'

const testimonials = [
  {
    image: person1,
    name: 'Waleed Kamel',
    role: 'Managing Director – ContactCars.com',
    quote:
      '\u201cWe have collaborated with IKEN for a decade as a third-party software provider, during which time we have successfully executed numerous projects across various technology platforms and business domains. The company fosters professionalism and unwavering support as its core values.\u201d',
  },
  {
    image: person2,
    name: 'Youssef Abdelrahman',
    role: 'Corporate Senior Project Manager – EFG Hermes',
    quote:
      '\u201cWe have had the pleasure of utilizing the conference system developed by IKEN Technology for several years now, & it has been an absolute game-changer for our organization. This system has seamlessly facilitated our communication needs, enabling us to conduct meetings, webinars, and conferences with unparalleled ease & efficiency.\u201d',
  },
  {
    image: person3,
    name: 'Mohammed Assem',
    role: 'CTO & Co-founder – Balad',
    quote:
      '\u201cIKEN Technology has truly exceeded our expectations. Their customized software solutions have not only streamlined our operations but also provided a significant boost in productivity. The team\'s responsiveness and commitment to delivering high-quality products have made our collaboration seamless. We highly recommend IKEN Technology for anyone seeking reliable and innovative software solutions.\u201d',
  },
]

const Stars = () => (
  <div className="rate">
    <span className="icon-star text-warning"></span>
    <span className="icon-star text-warning"></span>
    <span className="icon-star text-warning"></span>
    <span className="icon-star text-warning"></span>
    <span className="icon-star text-warning"></span>
  </div>
)

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const autoplayRef = useRef(null)

  // Responsive breakpoints matching requested config:
  // 0: items 1, 768: items 1, 1024: items 2
  const updateItemsPerView = useCallback(() => {
    const width = window.innerWidth
    if (width >= 1024) {
      setItemsPerView(2)
    } else {
      setItemsPerView(1)
    }
  }, [])

  useEffect(() => {
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [updateItemsPerView])

  // Reset index when items per view changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [itemsPerView])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  // Autoplay matching original speed: 700ms transition
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [maxIndex])

  // Calculate the percentage width per item and translation
  const itemWidthPercent = 100 / itemsPerView
  const gutter = 50 // matches original gutter: 50
  const translateX =
    currentIndex * (itemWidthPercent) + '%'

  return (
    <div className="section sec-testimonials" id="testimonials">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="inline-block rounded-full bg-sky-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 transition-all duration-700 ease-out">
              Customer Says
            </h2>
          </div>
          <div className="col-md-6 text-md-end">
            <div id="testimonial-nav">
              <span
                className="prev"
                data-controls="prev"
                onClick={handlePrev}
                role="button"
                tabIndex={-1}
              >
                Prev
              </span>

              <span
                className="next"
                data-controls="next"
                onClick={handleNext}
                role="button"
                tabIndex={-1}
              >
                Next
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4"></div>
        </div>
        <div className="testimonial-slider-wrap">
          <div
            className="tns-ovh"
            style={{ overflow: 'hidden' }}
          >
            <div
              className="testimonial-slider-inner"
              style={{
                display: 'flex',
                transition: 'transform 700ms ease',
                transform: `translateX(-${translateX})`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  className="item"
                  key={item.name}
                  style={{
                    flex: `0 0 ${itemWidthPercent}%`,
                    maxWidth: `${itemWidthPercent}%`,
                    paddingLeft: `${gutter / 2}px`,
                    paddingRight: `${gutter / 2}px`,
                    boxSizing: 'border-box',
                  }}
                >
                  <div className="testimonial">
                    <img
                      src={item.image}
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                      style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                    />
                    <Stars />
                    <h3 className="h5 text-primary header-Text">
                      {item.name}
                    </h3>
                    <p className="text-black-50 mb-4">{item.role}</p>
                    <blockquote>
                      <p>{item.quote}</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="tns-nav" style={{
            position: 'absolute',
            bottom: '-50px',
            zIndex: 2,
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={index === currentIndex ? 'tns-nav-active' : ''}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  background: 'none',
                  border: 'none',
                  display: 'inline-block',
                  margin: '2px',
                  height: '15px',
                  width: '15px',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
