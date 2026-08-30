import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Heart, 
  Activity, 
  ShieldAlert, 
  Stethoscope, 
  CheckCircle2, 
  Clock, 
  CalendarCheck 
} from "lucide-react"

const treatments = [
  {
    title: "Electrocardiograma (ECG) y Holter",
    description: "Monitoreo continuo del ritmo cardíaco durante 24 a 48 horas para detectar arritmias e isquemias silenciosas.",
    icon: Activity,
  },
  {
    title: "Ecocardiograma Doppler Color",
    description: "Ultrasonido de alta resolución para evaluar la estructura anatómica, válvulas y flujo sanguíneo en tiempo real.",
    icon: Heart,
  },
  {
    title: "Prueba de Esfuerzo (Ergometría)",
    description: "Evaluación de la respuesta cardíaca bajo actividad física controlada para diagnóstico de enfermedad coronaria.",
    icon: Stethoscope,
  },
  {
    title: "Control de Hipertensión y Arritmias",
    description: "Planes de tratamiento farmacológico y de estilo de vida personalizados para el manejo preventivo a largo plazo.",
    icon: ShieldAlert,
  },
]

export default function CardiologyPage() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=apr991212@gmail.com&su=${encodeURIComponent(
    "Solicitud de cita - Cardiología"
  )}&body=${encodeURIComponent(
    "Hola, me gustaría agendar una cita con el área de Cardiología. Mi nombre es: "
  )}`

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-500 selection:text-white">
      {/* Botón de regreso */}
      <div className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
        <Link
          href="/#servicios"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a servicios
        </Link>
      </div>

      {/* Hero inspirada en el diseño de referencia */}
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Luces de fondo */}
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-rose-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-red-600/15 blur-[140px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
          
          {/* Información Principal */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6">
            <Badge className="gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-rose-300 backdrop-blur-md">
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
              Unidad Cardíaca de Vanguardia
            </Badge>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Cuidamos la fuerza de tu corazón
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              Contamos con tecnología de diagnóstico digital e imagenología avanzada para prevenir, detectar y tratar patologías cardiovasculares de forma precisa e individualizada.
            </p>

            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rose-400" /> Diagnóstico no invasivo en minutos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rose-400" /> Especialistas acreditados por el Consejo de Cardiología
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rose-400" /> Atención de urgencias 24/7
              </li>
            </ul>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button
                render={
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                    <CalendarCheck className="h-5 w-5" />
                    <span>Agendar valoración</span>
                  </a>
                }
                size="lg"
                className="bg-rose-600 font-semibold text-white shadow-lg shadow-rose-600/30 hover:bg-rose-500"
              />
            </div>
          </div>

          {/* Render del Corazón 3D con Floating Badges */}
          <div className="relative flex justify-center lg:col-span-6">
            <div className="relative w-full max-w-md md:max-w-lg">
              
              {/* Imagen central */}
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-rose-500/20 bg-gradient-to-b from-rose-950/30 to-slate-900/80  backdrop-blur-xl shadow-2xl">
                <Image
                  src="/heart-3d.jpg" // Reemplaza con la ruta de tu imagen del corazón
                  alt="Modelo anatómico del corazón"
                  fill
                  priority
                  className="object-cover drop-shadow-[0_10px_25px_rgba(225,29,72,0.3)]"
                />
              </div>

              {/* Badges Flotantes tipo Glassmorphism */}
              <div className="absolute -left-4 top-8 max-w-[160px] rounded-2xl border border-white/10 bg-white/10 p-3.5 shadow-xl backdrop-blur-md hidden sm:block">
                <p className="text-xs font-semibold text-rose-300">Monitoreo 24/7</p>
                <p className="mt-1 text-[11px] text-slate-300">Seguimiento continuo de tu ritmo cardíaco.</p>
              </div>

              <div className="absolute -right-4 bottom-12 max-w-[170px] rounded-2xl border border-white/10 bg-white/10 p-3.5 shadow-xl backdrop-blur-md hidden sm:block">
                <p className="text-xs font-semibold text-rose-300">Prevención Temprana</p>
                <p className="mt-1 text-[11px] text-slate-300">Detección oportuna de riesgos arteriales.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sección de Tratamientos */}
      <section className="border-t border-slate-800 bg-slate-900/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
              Tratamientos y Estudios Especializados
            </h2>
            <p className="mt-3 text-slate-400">
              Instalaciones equipadas con tecnología médica de última generación para la prevención y cuidado integral de tu salud cardiovascular.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment) => {
              const Icon = treatment.icon
              return (
                <div
                  key={treatment.title}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-xl hover:shadow-rose-950/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {treatment.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Banner de CTA inferior */}
          <div className="mt-16 rounded-3xl border border-rose-500/20 bg-gradient-to-r from-rose-950/40 via-slate-900 to-rose-950/40 p-8 text-center backdrop-blur-lg md:p-12">
            <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
              ¿Presentas molestias o buscas un chequeo preventivo?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-slate-300">
              Agenda tu consulta con nuestros especialistas en cardiología y obtén un diagnóstico certero hoy mismo.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                render={
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                    <CalendarCheck className="h-5 w-5" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                }
                size="lg"
                className="bg-rose-600 text-white hover:bg-rose-500"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}