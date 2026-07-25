import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarCheck, ShieldCheck, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Badge className="gap-1.5 rounded-full bg-accent px-3 py-1.5 text-accent-foreground hover:bg-accent">
            <ShieldCheck className="h-3.5 w-3.5" />
            Más de 20 años cuidando tu salud
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Cuidamos tu salud con calidez y tecnología de vanguardia
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            En Clínica Vitalis reunimos a los mejores especialistas y equipos de
            última generación para brindarte una atención médica integral,
            humana y cercana.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#cita" />} size="lg" className="gap-2">
              <CalendarCheck className="h-5 w-5" />
              Agendar una cita
            </Button>
            <Button render={<a href="#servicios" />} size="lg" variant="outline">
              Ver servicios
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> según
              +3,500 pacientes
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/hero-clinica.png"
              alt="Doctora sonriendo en una clínica médica moderna"
              width={720}
              height={820}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Atención certificada</p>
              <p className="text-xs text-muted-foreground">Personal médico acreditado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
