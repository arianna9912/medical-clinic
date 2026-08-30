"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { HeartPulse, Users, CalendarCheck, Clock3 } from "lucide-react"

const stats = [
  { value: 20, suffix: "+", label: "Años de experiencia", icon: HeartPulse },
  { value: 50, suffix: "+", label: "Especialistas certificados", icon: Users },
  { value: 3500, suffix: "+", label: "Pacientes satisfechos", icon: CalendarCheck },
  { value: 24, suffix: "/7", label: "Atención de urgencias", icon: Clock3 },
]

function StatValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reduce = useReducedMotion()

  return (
    <span ref={ref} className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
      {reduce ? (
        `${value.toLocaleString("es-MX")}${suffix}`
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {value.toLocaleString("es-MX")}
        </motion.span>
      )}
      <span>{suffix}</span>
    </span>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary">
              <stat.icon className="h-5 w-5" />
            </span>
            <StatValue value={stat.value} suffix={stat.suffix} />
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
