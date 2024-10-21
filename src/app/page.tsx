import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"
import Portfolio from "@/components/landing/portfolio"
import Benefits from "@/components/landing/benefits"
import Servicios from "@/components/landing/servicios"
import Hero from "@/components/landing/hero"


export default function LandingPage() {

  return (
    <div className="w-full flex flex-col text-white">
      <Header colorDefault="bg-transparent" colorScroll="bg-black/95 shadow"/>

      <main className="flex-1">
        <Hero/>
        <Servicios/>
        <Portfolio/>
        <Benefits/>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/95">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Necesitas hacer realidad tu proyecto?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Contáctanos hoy para aprender más sobre cómo la madera puede hacer realidad la casa de tus sueños.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-primary border-[#FDC107]/20 text-black placeholder:text-gray-400"
                    placeholder="Ingresa tu email"
                    type="email"
                  />
                  <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Empecemos</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}