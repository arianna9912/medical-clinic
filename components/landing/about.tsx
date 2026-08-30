"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Reveal } from "./reveal"

const benefits = [
  "Equipo médico certificado y en constante actualización",
  "Tecnología de diagnóstico de última generación",
  "Atención personalizada y trato humano",
  "Historial clínico digital y seguro",
]

export function About() {
  return (
    <section
      id="nosotros"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Imagen */}
        <Reveal direction="right" className="order-last w-full lg:order-first">
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
              <Image
                src="/instalaciones.jpg"
                alt="Recepción moderna de la Clínica Vitalis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Año flotante sobrio */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border/50 bg-card px-7 py-5 shadow-lg sm:right-8">
              <p className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text font-heading text-3xl font-extrabold text-transparent">
                +20
              </p>
              <p className="mt-1 text-sm text-muted-foreground">años cuidando tu salud</p>
            </div>
          </div>
        </Reveal>

        {/* Contenido */}
        <div className="flex flex-col gap-8">
          <Reveal>
            <Badge className="w-fit rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              ¿Por qué elegirnos?
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.1]">
              Una experiencia médica moderna, cercana y confiable
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Combinamos la calidez del trato humano con la precisión de la
              tecnología para ofrecerte un cuidado que realmente marca la
              diferencia en tu bienestar.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
