"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "./reveal"

const faqs = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes agendar tu cita en línea a través de nuestro formulario, llamando a nuestra recepción o visitándonos directamente. Confirmamos tu cita en minutos.",
  },
  {
    question: "¿Atienden urgencias las 24 horas?",
    answer:
      "Sí, contamos con un servicio de urgencias disponible las 24 horas del día, los 365 días del año, con personal médico especializado siempre listo.",
  },
  {
    question: "¿Trabajan con seguros médicos?",
    answer:
      "Trabajamos con las principales aseguradoras del país. Contáctanos para confirmar la cobertura de tu póliza antes de tu consulta.",
  },
  {
    question: "¿Cuánto tardan los resultados de laboratorio?",
    answer:
      "La mayoría de los estudios de laboratorio están listos el mismo día. Recibirás tus resultados de forma digital y segura en tu historial clínico.",
  },
  {
    question: "¿Necesito una orden médica para hacerme estudios?",
    answer:
      "Algunos estudios requieren orden médica y otros no. Nuestro equipo te orientará según el tipo de análisis que necesites realizar.",
  },
]

export function Faq() {
  return (
    <section id="preguntas" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <Badge className="rounded-full border-primary/15 bg-primary/5 px-4 py-2 text-sm text-primary">
              Preguntas frecuentes
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Resolvemos tus dudas
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion multiple={false} className="mt-10 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
