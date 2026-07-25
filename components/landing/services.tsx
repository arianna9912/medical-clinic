import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <section id="servicios" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="rounded-full bg-accent text-accent-foreground hover:bg-accent">
            Nuestros servicios
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Especialidades pensadas para cada etapa de tu vida
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Contamos con un amplio equipo multidisciplinario para acompañarte en
            todo momento con atención de calidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardHeader>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
