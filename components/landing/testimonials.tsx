"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"
import { Reveal } from "./reveal"

const testimonials = [
  {
    name: "María González",
    detail: "Paciente de Cardiología",
    quote:
      "El trato fue excelente de principio a fin. Los médicos se tomaron el tiempo de explicarme todo con calma. Me sentí en las mejores manos.",
  },
  {
    name: "Jorge Ramírez",
    detail: "Paciente de Traumatología",
    quote:
      "Agendar mi cita en línea fue muy fácil y la atención puntual. Las instalaciones son impecables y modernas. Totalmente recomendado.",
  },
  {
    name: "Sofía Herrera",
    detail: "Mamá de paciente de Pediatría",
    quote:
      "La pediatra fue increíblemente cálida con mi hijo. Se nota la vocación y el profesionalismo del equipo. Volveremos sin dudarlo.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Badge className="rounded-full border-primary/15 bg-primary/5 px-4 py-2 text-sm text-primary">
              Testimonios
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Lo que dicen nuestros pacientes
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <Card className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="flex-1 leading-relaxed text-pretty text-foreground">
                    {`"${t.quote}"`}
                  </p>
                  <div className="mt-2 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
