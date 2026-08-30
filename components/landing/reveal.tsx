"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
  as?: "div" | "section" | "span" | "li" | "p" | "h2" | "h3"
}

const offsets: Record<Direction, { y?: number; x?: number }> = {
  up: { y: 36 },
  down: { y: -36 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.3,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion()
  const offset = offsets[direction]

  const Tag = motion[as]

  return (
    <Tag
      initial={{
        opacity: 0,
        ...(reduce ? {} : offset),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration: reduce ? 0 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  )
}
