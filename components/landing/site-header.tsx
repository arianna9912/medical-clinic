"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HeartPulse, Menu, Phone, X } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Preguntas", href: "#preguntas" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=apr991212@gmail.com&su=${encodeURIComponent(
    "Solicitud de cita - Clínica Vitalis"
  )}&body=${encodeURIComponent(
    "Hola, me gustaría agendar una cita. Mi nombre es: "
  )}`

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-primary-foreground shadow-sm shadow-primary/20">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Clínica Vitalis
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+525527407608"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            (55) 2740 7608
          </a>
          <Button
            className="rounded-lg"
            render={
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                Agendar cita
              </a>
            }
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <Button
              render={
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Agendar cita
                </a>
              }
              className="mt-2"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
