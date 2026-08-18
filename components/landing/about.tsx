import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const benefits = [
  "Equipo médico certificado y en constante actualización",
  "Tecnología de diagnóstico de última generación",
  "Atención personalizada y trato humano",
  "Historial clínico digital y seguro",
  "Resultados de laboratorio en tiempo récord",
  "Agenda tu cita en línea en minutos",
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-16 md:py-24">
     
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        
       
        <div className="order-last w-full lg:order-first">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-xl md:aspect-[5/4]">
            <Image
              src="/instalaciones.jpg"
              alt="Recepción moderna de la Clínica Vitalis"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <Badge className="w-fit rounded-full bg-accent text-accent-foreground hover:bg-accent">
            ¿Por qué elegirnos?
          </Badge>
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Una experiencia médica moderna, cercana y confiable
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Combinamos la calidez del trato humano con la precisión de la
            tecnología para ofrecerte un cuidado que realmente marca la
            diferencia en tu bienestar.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}