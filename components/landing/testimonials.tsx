import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

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
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="rounded-full bg-accent text-accent-foreground hover:bg-accent">
            Testimonios
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border">
              <CardContent className="flex h-full flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 leading-relaxed text-foreground text-pretty">
                  {`"${t.quote}"`}
                </p>
                <div className="mt-2 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
