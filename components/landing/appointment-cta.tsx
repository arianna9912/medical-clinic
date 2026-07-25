import { Button } from "@/components/ui/button"
import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react"

const infoItems = [
  { icon: Phone, label: "Llámanos", value: "(55) 1234 5678" },
  { icon: Clock, label: "Horario", value: "Lun a Dom · 24 horas" },
  { icon: MapPin, label: "Ubicación", value: "Av. Reforma 123, CDMX" },
]

export function AppointmentCta() {
  return (
    <section id="cita" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Tu salud no puede esperar. Agenda tu cita hoy
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Reserva tu consulta en línea de forma rápida y sencilla. Nuestro
              equipo está listo para atenderte.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                render={<a href="tel:+525512345678" />}
                size="lg"
                variant="secondary"
                className="gap-2 bg-background text-primary hover:bg-background/90"
              >
                <CalendarCheck className="h-5 w-5" />
                Agendar cita ahora
              </Button>
              <Button
                render={<a href="tel:+525512345678" />}
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                Llamar por teléfono
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 border-t border-primary-foreground/20 pt-10 sm:grid-cols-3">
            {infoItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-sm text-primary-foreground/70">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
