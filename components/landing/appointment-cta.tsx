"use client"

import { motion, useReducedMotion } from "motion/react"
import { Button } from "@/components/ui/button"
import { CalendarCheck, Clock, MapPin, Phone, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

const infoItems = [
  { icon: Phone, label: "Llámanos", value: "(55) 2740 7608" },
  { icon: Clock, label: "Horario", value: "Lun a Dom · 24 horas" },
  { icon: MapPin, label: "Ubicación", value: "Av. Reforma 123, CDMX" },
]

const CONTACT_EMAIL = "apr991212@gmail.com"

export function AppointmentCta() {
  const reduce = useReducedMotion()
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}&su=${encodeURIComponent(
    "Solicitud de cita - Clínica Vitalis"
  )}&body=${encodeURIComponent(
    "Hola, me gustaría agendar una cita. Mi nombre es: "
  )}`

  return (
    <section id="cita" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a1f44] px-6 py-16 text-white shadow-2xl shadow-primary/20 md:px-16 md:py-24">
            {/* Fondo decorativo */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {/* Glow principal */}
              <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/40 blur-[140px]" />
              <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-sky-500/30 blur-[120px]" />
              {/* Retícula sutil */}
              <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:60px_60px]" />
              {/* Efecto cielo radial */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,120,255,0.25),transparent_60%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Reveal delay={0.05}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Atención inmediata
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-6 font-heading text-balance text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                  Tu salud no puede{" "}
                  <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
                    esperar
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
                  Reserva tu consulta en línea o llámanos. Nuestro equipo está
                  listo para ofrecerte la mejor atención, hoy mismo.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="group w-full gap-2 rounded-xl bg-white px-7 py-3 text-base font-bold text-[#0a1f44] shadow-lg shadow-black/20 transition-shadow hover:bg-white/95 hover:shadow-xl sm:w-auto"
                      render={
                        <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                          <CalendarCheck className="h-5 w-5" />
                          <span>Agendar cita</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-icon="inline-end" />
                        </a>
                      }
                    />
                  </motion.div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 rounded-xl border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white sm:w-auto w-full"
                    render={
                      <a href="tel:+525527407608">
                        <Phone className="h-5 w-5" />
                        <span>Llamar ahora</span>
                      </a>
                    }
                  />
                </div>
              </Reveal>
            </div>

            {/* Info grid inferior */}
            <Reveal delay={0.25}>
              <div className="relative z-10 mx-auto mt-14 grid max-w-4xl gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 text-left sm:flex-col sm:items-center sm:text-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sky-200 backdrop-blur-sm">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
