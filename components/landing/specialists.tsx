import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const specialists = [
  {
    name: "Dr. Andrés Morales",
    role: "Cardiólogo",
    image: "/doctor-1.png",
    experience: "15 años de experiencia",
  },
  {
    name: "Dra. Lucía Fernández",
    role: "Pediatra",
    image: "/doctor-2.png",
    experience: "12 años de experiencia",
  },
  {
    name: "Dra. Carmen Ríos",
    role: "Neuróloga",
    image: "/doctor-3.png",
    experience: "18 años de experiencia",
  },
]

export function Specialists() {
  return (
    <section id="especialistas" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="rounded-full bg-accent text-accent-foreground hover:bg-accent">
            Nuestro equipo
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Especialistas comprometidos con tu bienestar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Profesionales altamente capacitados que te acompañan con dedicación
            y experiencia.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((doctor) => (
            <Card key={doctor.name} className="overflow-hidden border-border pt-0">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={doctor.image}
                  alt={`Retrato de ${doctor.name}`}
                  width={480}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-primary">{doctor.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {doctor.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
