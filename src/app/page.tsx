'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Menu, X, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/uinta-logo.svg"
import placeholder from "../public/placeholder.svg"

export default function LandingPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="container flex flex-col bg-primary text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#FDC107]/20 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex px-4 md:px-16 h-16 justify-between ">
          <div>
            <Image src={logo} className="w-auto h-16" alt="logo"></Image>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Nosotros
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Portfolio
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Contacto
            </Link>
            <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Solicitar cotizacion</Button>
          </nav>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#">
                Nosotros
              </Link>
              <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#">
                Portfolio
              </Link>
              <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#">
                Contacto
              </Link>
              <Button className="bg-secondary text-primary-foreground hover:bg-secondary/90">Solicitar cotizacion</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container mx-auto mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sistema SIP
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Experimenta el futuro de la construcción de viviendas con nuestro innovador sistema de Paneles Estructurales Aislados. Eficiente, sostenible y construido para durar.
              </p>
              <div className="space-x-4">
                <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Explore Models</Button>
                <Button variant="outline" className="border-[#FDC107] text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={placeholder}
                    alt={`Project ${i}`}
                    className="object-cover"
                    width={600}
                    height={200}
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Beneficios del sistema SIP
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
                {[
                  "Ahorro energético",
                  "Construcción rápida",
                  "Ecológico y sostenible",
                  "Aislante acústico",
                  "Duradero",
                  "Versatilidad en diseño",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-4">
                    <ChevronRight className="h-6 w-6 text-[#FDC107]" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Modern Minimalist", "Eco Retreat", "Urban Oasis", "Family Haven", "Mountain Lodge", "Coastal Dream"].map(
                (model) => (
                  <Card key={model} className="bg-primary border-[#FDC107]/20">
                    <Image
                      src={placeholder}
                      alt={model}
                      className="object-cover w-full h-48"
                      width={400}
                      height={200}
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{model}</h3>
                      <p className="text-gray-400 mb-4">Experience modern living with our {model.toLowerCase()} design.</p>
                      <Button variant="outline" className="w-full border-[#FDC107] text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
                        View Specs
                      </Button>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Clients Say
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
                    "The SIP System has transformed our home. It's energy-efficient, comfortable, and was built in record time!"
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
                Ready to Build Your Dream Home?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Contact us today to learn more about how the SIP System can make your dream home a reality.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#FDC107]/20 bg-primary py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2023 SIP System Homes. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4">
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}