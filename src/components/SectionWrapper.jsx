// import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// const baseDuration = 600

// const SectionWrapper = ({
//   id,
//   children,
//   className = '',
//   as: Tag = 'section',
//   padding = 'py-20 md:py-24',
// }) => {
//   const { ref, isInView } = useIntersectionObserver()

//   return (
//     <Tag
//       id={id}
//       ref={ref}
//       className={`${padding} ${className}`}
//     >
//       <div
//         className={`container transform-gpu transition-all duration-[${baseDuration}ms] ease-in-out ${
//           isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//         }`}
//       >
//         {children}
//       </div>
//     </Tag>
//   )
// }

// export default SectionWrapper

import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const baseDuration = 600

const SectionWrapper = ({
  id,
  children,
  className = '',
  as: Tag = 'section',
  padding = 'py-20 md:py-24',
  style,
}) => {
  const { ref, isInView } = useIntersectionObserver()

  return (
    <Tag
      id={id}
      ref={ref}
      className={`${padding} ${className}`}
      style={style}
    >
      <div
        className={`container transform-gpu transition-all duration-[${baseDuration}ms] ease-in-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {children}
      </div>
    </Tag>
  )
}

export default SectionWrapper
