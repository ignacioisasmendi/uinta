import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight, Star} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image from "../public/image1.jpg"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"
import Portfolio from "@/components/landing/portfolio"
import Benefits from "@/components/landing/benefits"
import Servicios from "@/components/landing/servicios"
import backgroundImage from "../public/FullSizeRender.jpg"

export default function LandingPage() {

  return (
    <div className="w-full flex flex-col text-white">
      <Header/>

      <main className="flex-1">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Construction site background"
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            Sistema SIP
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Experimenta el futuro de la construcción de viviendas con nuestro innovador sistema de Paneles Estructurales Aislados. Eficiente, sostenible y construido para durar.
          </p>
          <div className="flex flex-col md:flex-row max-md:space-y-2 md:space-x-4">
            <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">
              Explora nuestros proyectos
            </Button>
            <Button className=" text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
              ¿Que es el sistema SIP?
            </Button>
          </div>
        </div>
      </div>
    </section>

        <Portfolio/>
        <Benefits/>
        <Servicios/>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/95">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para Construir la Casa de Tus Sueños?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Contáctanos hoy para aprender más sobre cómo el Sistema SIP puede hacer realidad la casa de tus sueños.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
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