"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"
import Portfolio from "@/components/landing/portfolio"
import Benefits from "@/components/landing/benefits"
import Servicios from "@/components/landing/servicios"
import backgroundImage from "../public/hero-image1.jpg"
import { ChevronDown } from "lucide-react"

export default function LandingPage() {

  const [isVisible, setIsVisible] = useState(true)


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToContent = () => {
    const nextSection = document.getElementById("next-section")
    const header = document.querySelector("header")

    if (!nextSection) {
      console.error("Next section not found")
      return
    }

    const headerHeight = header?.offsetHeight || 0
    const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY
    const offsetPosition = sectionPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full flex flex-col text-white">
      <Header colorDefault="bg-transparent" colorScroll="bg-black/95 shadow"/>

      <main className="flex-1">
        
      <section className="relative w-full pt-24 pb-12 md:py-24 lg:py-48 xl:py-96 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Construction site background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-30 container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
              Construimos en madera 
            </h1>
            <p className="max-w-[700px] text-xl text-gray-200">
            Estamos en el futuro de la construcción enfocados en  viviendas sostenibles, eficientes y duraderas. Nos especializamos en Sistema SIP
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90 w-full sm:w-auto">
                Explora nuestras obras
              </Button>
              <Button className="text-[#FDC107] hover:bg-[#FDC107] hover:text-black w-full sm:w-auto">
                ¿Que es el sistema SIP?
              </Button>
            </div>
            {isVisible && (
              <div
                className="hidden md:block fixed bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce "
                onClick={scrollToContent}
              >
                <ChevronDown size={48} className="text-[#FDC107]" />
              </div>
            )}
            <style jsx>{`
              @keyframes bounce {
                0%, 100% {
                  transform: translateY(0) translateX(-50%);
                }
                50% {
                  transform: translateY(-20px) translateX(-50%);
                }
              }
              .animate-bounce {
                animation: bounce 2s infinite;
              }
            `}</style>
          </div>
           
        </div>
      </section>

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