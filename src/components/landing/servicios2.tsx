import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import kit from "@/public/pictures-services/kit.jpg"
import revestimiento from "@/public/pictures-services/revestimiento.jpg"
import techado from "@/public/pictures-services/techado.jpg"

export default function Component() {
  const services = [
    {
      id: 1,
      title: "Montaje de Kit",
      description: "Servicio profesional de montaje de kits para construcción.",
      image:  kit ,
    },
    {
      id: 2,
      title: "Revestimientos",
      description: "Soluciones de revestimiento para mejorar la estética y protección de su edificio.",
      image: revestimiento,
    },
    {
      id: 3,
      title: "Techado",
      description: "Servicios de techado de alta calidad para todo tipo de estructuras.",
      image: techado,
    },
  ]

  return (
    <section className="w-full px-4 md:px-16 py-12 md:py-24 lg:py-32 bg-[#272c2d]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#fdc207] mb-12 text-center">Nuestros Servicios</h2>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-90"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-[#fdc207]">{service.title}</h3>
                <p className="text-[#eae5df] text-lg">{service.description}</p>
                <Button className="bg-[#fdc207] text-[#272c2d] hover:bg-[#fdc207]/90 mt-4">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}