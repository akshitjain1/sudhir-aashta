import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RevealSection({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const offsets = {
    up:    { y: 60, x: 0 },
    down:  { y: -60, x: 0 },
    left:  { y: 0, x: -80 },
    right: { y: 0, x: 80 },
    scale: { y: 0, x: 0, scale: 0.88 },
  }

  const offset = offsets[direction] || offsets.up
  const initial = { opacity: 0, ...offset }
  const animate = isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
