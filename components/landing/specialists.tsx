"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Award, CalendarCheck, ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"

const specialists = [
  {
    name: "Dr. Andrés Morales",
    role: "Cardiólogo",
    image: "/doctor-1.png",
    experience: "15 años de experiencia",
    tag: "Cardiología avanzada",
  },
  {
    name: "Dra. Lucía Fernández",
    role: "Pediatra",
    image: "/doctor-2.png",
    experience: "12 años de experiencia",
    tag: "Pediatría integral",
  },
  {
    name: "Dra. Carmen Ríos",
    role: "Neuróloga",
    image: "/doctor-3.png",
    experience: "18 años de experiencia",
    tag: "Neurociencia clínica",
  },
]

export function Specialists() {
  const reduce = useReducedMotion()

  return (
    <section
      id="especialistas"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-300/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Badge className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur-md hover:bg-primary/15">
              Nuestro equipo
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Especialistas comprometidos con{" "}
              <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                tu bienestar
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
              Profesionales altamente capacitados que te acompañan con dedicación
              y experiencia.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.12} className="h-full">
              <motion.article
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-white/60 shadow-sm shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Overlay gradiente superior */}
                <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`Retrato de ${doctor.name}`}
                    width={480}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" aria-hidden="true" />

                  {/* Badge flotante superior */}
                  <Badge className="absolute left-4 top-4 z-10 max-w-[calc(100%-5.5rem)] gap-1.5 overflow-hidden rounded-full border-white/40 bg-white/70 px-3 py-1.5 text-xs text-foreground shadow-md backdrop-blur-md hover:bg-white/80">
                    <Award className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="truncate">{doctor.tag}</span>
                  </Badge>

                  {/* Contenido sobre la imagen */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <p className="text-sm font-medium text-sky-200">{doctor.role}</p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-white">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{doctor.experience}</p>
                  </div>

                  {/* Botón flotante que aparece en hover */}
                  <div className="absolute right-4 top-4 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg backdrop-blur-md transition-colors hover:bg-white">
                      <CalendarCheck className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 right-0 z-10 flex h-12 w-12 translate-x-3 translate-y-3 items-center justify-center rounded-tl-[1.75rem] bg-gradient-to-br from-primary to-sky-500 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
