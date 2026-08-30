import { Clock, HeartPulse, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const columns = [
  {
    title: "Clínica",
    links: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Especialistas", href: "/#especialistas" },
      { label: "Instalaciones", href: "/#nosotros" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Preguntas frecuentes", href: "/#preguntas" },
      { label: "Agendar cita", href: "/#cita" },
      { label: "Contacto", href: "/#cita" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-primary-foreground shadow-sm">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                Clínica Vitalis
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cuidamos tu salud con calidez humana y tecnología de vanguardia,
              acompañándote en cada etapa de tu vida.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3 lg:justify-self-end">
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:5527407608"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>(55) 2740 7608</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=apr991212@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>apr991212@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Av. Reforma 123, CDMX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Lun - Sab: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1 border-t border-border/60 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} Clínica Vitalis. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
