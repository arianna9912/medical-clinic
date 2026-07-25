import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { Specialists } from "@/components/landing/specialists"
import { Testimonials } from "@/components/landing/testimonials"
import { Faq } from "@/components/landing/faq"
import { AppointmentCta } from "@/components/landing/appointment-cta"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Specialists />
        <Testimonials />
        <Faq />
        <AppointmentCta />
      </main>
      <SiteFooter />
    </div>
  )
}
