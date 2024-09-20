import { Button } from "@/components/shadcn/button"
import { Card } from "@/components/shadcn/card"
import { Input } from "@/components/shadcn/input"
import { ChevronRight, Star} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image from "../public/image1.jpg"
import Footer from "@/components/custom/footer"
import Header from "@/components/custom/header"
import Portfolio from "@/components/custom/portfolio"
import Benefits from "@/components/custom/benefits"

export default function LandingPage() {

  return (
    <div className="w-full flex flex-col bg-primary text-white">
      <Header/>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#111]">
          <div className="container mx-auto mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sistema SIP
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Experimenta el futuro de la construcción de viviendas con nuestro innovador sistema de Paneles Estructurales Aislados. Eficiente, sostenible y construido para durar.
              </p>
              <div className="flex flex-col md:flex-row max-md:space-y-2 md:space-x-4">
                <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Explora nuestros proyectos</Button>
                <Button variant="outline" className="border-[#FDC107] text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
                  ¿Que es el sistema SIP?
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Portfolio/>
        <Benefits/>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Opiniónes de Nuestros Clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-[#111] border-[#FDC107]/20 p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-[#FDC107] text-[#FDC107]" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4">
                    The SIP System has transformed our home. Its energy-efficient, comfortable, and was built in record time!
                  </p>
                  <p className="font-medium">- Satisfied Homeowner {i}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
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