import { HeartPulse, Mail, MapPin, Phone } from "lucide-react"

const columns = [
  {
    title: "Servicios",
    links: ["Medicina General", "Cardiología", "Pediatría", "Laboratorio Clínico"],
  },
  {
    title: "Clínica",
    links: ["Nosotros", "Especialistas", "Instalaciones", "Trabaja con nosotros"],
  },
  {
    title: "Ayuda",
    links: ["Preguntas frecuentes", "Agendar cita", "Aseguradoras", "Contacto"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                Clínica Vitalis
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cuidamos tu salud con calidez humana y tecnología de vanguardia,
              acompañándote en cada etapa de tu vida.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> (55) 1234 5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> contacto@clinicavitalis.mx
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Av. Reforma 123, CDMX
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} Clínica Vitalis. Todos los derechos reservados.`}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
