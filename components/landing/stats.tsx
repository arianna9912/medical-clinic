const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "50+", label: "Especialistas certificados" },
  { value: "3,500+", label: "Pacientes satisfechos" },
  { value: "24/7", label: "Atención de urgencias" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
