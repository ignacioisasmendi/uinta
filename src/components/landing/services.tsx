'use client'

import { useEffect, useRef, useState } from 'react'
import { TableCellsSplit } from 'lucide-react'

// Assuming you have these imports
import kitIcon from "@/public/icons/kit-icon.png"
import roofIcon from "@/public/icons/roof-icon.png"

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
  flecha: boolean
  delay: number
}

export default function ServicesSection() {
  return (
    <section id="next-section" className="bg-black/90 text-white py-16 px-4 md:px-8">
      <div className="container mx-auto"> 
        <div className="text-center">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-2">
            Servicios
          </h2>
        </div>
        <div className="w-24 h-1 bg-[#FDC107] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceItem
            icon={<img src={kitIcon.src} alt="kit-icon" className="w-16 h-16" />}
            title="Montaje de kit"
            description="Ofrecemos servicio de montaje de paneles SIP de manera rápida y precisa."
            flecha={false}
            delay={0}
          />
          <ServiceItem
            icon={<TableCellsSplit className="w-16 h-16 text-[#fdc215]" />}
            title="Revestimiento"
            description="Colocamos diversos revestimientos como chapa o siding sobre construcción de paneles."
            flecha={false}
            delay={100}
          />
         <ServiceItem
            icon={<img src={roofIcon.src} alt="roof-icon" className="w-16 h-16" />}
            title="Techado"
            description="Brindamos soluciones de techado duraderas para cada proyecto."
            flecha={true}
            delay={200}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ icon, title, description, flecha, delay }: ServiceItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [delay])

  return (
    <div 
      ref={itemRef}
      className={`flex flex-col items-center text-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1/2'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${flecha ? 'mb-4' : 'mb-4'}`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}