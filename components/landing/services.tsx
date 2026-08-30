"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "./reveal"
import {
  Activity,
  Baby,
  Brain,
  Bone,
  Eye,
  HeartPulse,
  Stethoscope,
  Syringe,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Medicina General",
    description:
      "Consultas de diagnóstico, prevención y seguimiento para toda la familia.",
  },
  {
    icon: HeartPulse,
    title: "Cardiología",
    description:
      "Evaluación y tratamiento integral de la salud de tu corazón con tecnología avanzada.",
  },
  {
    icon: Baby,
    title: "Pediatría",
    description:
      "Atención especializada para el crecimiento y desarrollo saludable de tus hijos.",
  },
  {
    icon: Brain,
    title: "Neurología",
    description:
      "Diagnóstico y manejo de trastornos del sistema nervioso con enfoque personalizado.",
  },
  {
    icon: Bone,
    title: "Traumatología",
    description:
      "Cuidado de lesiones óseas, articulares y musculares para tu movilidad.",
  },
  {
    icon: Eye,
    title: "Oftalmología",
    description:
      "Exámenes y tratamientos para mantener la salud visual en todas las edades.",
  },
  {
    icon: Syringe,
    title: "Laboratorio Clínico",
    description:
      "Análisis y estudios con resultados rápidos, precisos y confiables.",
  },
  {
    icon: Activity,
    title: "Urgencias 24/7",
    description:
      "Atención médica inmediata todos los días del año cuando más lo necesitas.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Badge className="rounded-full border-primary/15 bg-primary/5 px-4 py-2 text-sm text-primary">
              Nuestros servicios
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Especialidades pensadas para cada etapa de tu vida
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
              Contamos con un amplio equipo multidisciplinario para acompañarte
              en todo momento con atención de calidad.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.08} className="h-full">
              <Card className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </span>
                </CardHeader>
                <CardContent>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
