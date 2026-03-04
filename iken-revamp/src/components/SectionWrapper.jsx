export default function SectionWrapper({ id, className = '', children, bg = 'bg-white' }) {
    return (
        <section
            id={id}
            className={`section-padding ${bg} ${className}`}
        >
            <div className="container-wide">
                {children}
            </div>
        </section>
    );
}
