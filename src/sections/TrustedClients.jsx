import { useEffect, useRef } from 'react'
import './TrustedClients.css'

// Import client logos
import client1 from '../assets/trusted-clients-1.jpg'
import client2 from '../assets/trusted-clients-2.jpg'
import client3 from '../assets/trusted-clients-3.jpg'
import client4 from '../assets/trusted-clients-4.jpg'
import client5 from '../assets/trusted-clients-5.jpg'
import client6 from '../assets/trusted-clients-6.jpg'
import client7 from '../assets/trusted-clients-7.jpg'
import client8 from '../assets/trusted-clients-8.jpg'
import client9 from '../assets/trusted-clients-9.jpg'
import client10 from '../assets/trusted-clients-10.jpg'
import client11 from '../assets/trusted-clients-11.jpg'

const clients = [
    { id: 1, name: "Client 1", logo: client1 },
    { id: 2, name: "Client 2", logo: client2 },
    { id: 3, name: "Client 3", logo: client3 },
    { id: 4, name: "Client 4", logo: client4 },
    { id: 5, name: "Client 5", logo: client5 },
    { id: 6, name: "Client 6", logo: client6 },
    { id: 7, name: "Client 7", logo: client7 },
    { id: 8, name: "Client 8", logo: client8 },
    { id: 9, name: "Client 9", logo: client9 },
    { id: 10, name: "Client 10", logo: client10 },
    { id: 11, name: "Client 11", logo: client11 },
]

const TrustedClients = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        // Setup Intersection Observer for the fade-up reveal animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15, // Trigger when 15% of the element is visible
        }

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal')
                    // Unobserve after triggering once as requested
                    observer.unobserve(entry.target)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section className="trusted-clients" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="line"></span>
                    <h2 className="header-Text">OUR TRUSTED CLIENTS</h2>
                    <span className="line"></span>
                </div>

                <div className="clients-wrapper">
                    <div className="clients-track">
                        <div className="clients-slide">
                            {clients.map((client) => (
                                <div key={`slide1-${client.id}`} className="client-logo-wrapper">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="client-logo"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="clients-slide">
                            {clients.map((client) => (
                                <div key={`slide2-${client.id}`} className="client-logo-wrapper">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="client-logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedClients
