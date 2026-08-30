"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import { CalendarCheck, ShieldCheck, Star, ArrowRight, HeartPulse } from "lucide-react"

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 80])

  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=apr991212@gmail.com&su=${encodeURIComponent(
    "Solicitud de cita - Clínica Vitalis"
  )}&body=${encodeURIComponent(
    "Hola, me gustaría agendar una cita. Mi nombre es: "
  )}`

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,120,255,0.05),transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex max-w-full items-start gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm leading-snug text-primary sm:items-center">
              <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" />
              <span>Clínica Vitalis · Más de 20 años cuidando tu salud</span>
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-heading text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            Cuidamos tu salud con calidez y{" "}
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              tecnología
            </span>{" "}
            de vanguardia
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Reunimos a los mejores especialistas y equipos de última generación
            para brindarte una atención médica integral, humana y cercana.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Button
              size="lg"
              className="group w-full gap-2 px-6 py-2.5 sm:w-auto"
              render={
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="h-5 w-5" />
                  <span>Agendar cita</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-icon="inline-end" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="group w-full gap-2 px-6 py-2.5 sm:w-auto"
              render={
                <a href="#servicios">
                  Ver servicios
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-icon="inline-end" />
                </a>
              }
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="flex items-center gap-3 pt-1"
          >
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> según
              +3,500 pacientes
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div style={{ y: imageY }} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-primary/5">
              <Image
                src="/hero-clinica.png"
                alt="Doctora sonriendo en una clínica médica moderna"
                width={720}
                height={820}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-xl border border-border/60 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md sm:left-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Atención certificada</p>
                <p className="text-xs text-muted-foreground">Personal médico acreditado</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
