import { Hammer, Brush, ChevronUp, TableCellsSplit } from "lucide-react"
import { ReactNode } from "react"

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  flecha: boolean;
}

export default function ServicesSection() {
  return (
    <section className="bg-black/90 text-white py-16 px-4 md:px-8">
      <div className="container mx-auto"> 
        <div className="text-center">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-2">
            Servicios
          </h2>
        </div>
        <div className="w-24 h-1 bg-[#FDC107] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceItem
            icon={<Hammer className="w-12 h-12 text-yellow-400" />}
            title="Montaje de kit"
            description="Ofrecemos servicios profesionales de montaje de kits, asegurando una instalación precisa y eficiente para sus proyectos."
            flecha={false}
          />
          <ServiceItem
            icon={<TableCellsSplit className="w-12 h-12 text-yellow-400" />}
            title="Revestimiento"
            description="Nuestro equipo especializado proporciona servicios de revestimiento de alta calidad para mejorar y proteger sus estructuras."
            flecha={false}
          />
         <ServiceItem
            icon={
              <div className="w-16 h-16 flex items-end justify-center">
                <ChevronUp className="w-16 h-16 text-yellow-400" />
              </div>
            }
            title="Techado"
            description="Brindamos soluciones de techado duraderas y estéticas, adaptadas a las necesidades específicas de cada proyecto."
            flecha={true}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ icon, title, description, flecha }: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${flecha ? 'mb-0' : 'mb-4'}`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}