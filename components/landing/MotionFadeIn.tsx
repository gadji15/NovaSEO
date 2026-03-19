'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function MotionFadeIn({
  children,
  delay = 0
}: {
  children: ReactNode
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
