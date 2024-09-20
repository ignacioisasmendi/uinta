import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/accordion" 
import { Button } from "@/components/shadcn/button"                          
import { Card, CardContent } from "@/components/shadcn/card"
import { ChevronRight, Zap, Leaf, Clock, PiggyBank, Shield, Hexagon } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Eficiencia Energética",
      icon: <Zap className="h-6 w-6 text-[#FDC107]" />,
      description: "Las casas construidas con SIP son increíblemente eficientes energéticamente, reduciendo los costos de calefacción y refrigeración.",
      details: "La construcción con SIP crea una envolvente del edificio herméticamente sellada, minimizando las fugas de aire y los puentes térmicos. Esto resulta en una reducción de hasta un 50% en el consumo de energía en comparación con los métodos de construcción tradicionales. Los propietarios pueden esperar facturas de servicios significativamente más bajas y una menor huella de carbono."
    },
    {
      title: "Ecológico",
      icon: <Leaf className="h-6 w-6 text-[#FDC107]" />,
      description: "Los materiales sostenibles y la reducción de residuos hacen que las casas SIP sean amigables con el medio ambiente.",
      details: "Los SIP están hechos de recursos renovables y generan un mínimo de residuos de construcción. La eficiencia energética de las casas SIP también implica menores emisiones de gases de efecto invernadero a lo largo de la vida del edificio. Además, la precisión en la fabricación de los SIP reduce los residuos en el sitio de construcción, minimizando aún más el impacto ambiental."
    },
    {
      title: "Construcción Rápida",
      icon: <Clock className="h-6 w-6 text-[#FDC107]" />,
      description: "La construcción con SIP es más rápida que los métodos tradicionales, ahorrando tiempo y costos laborales.",
      details: "Los paneles SIP se prefabrican fuera del sitio, lo que permite un ensamblaje rápido una vez en el lugar. Esto puede reducir el tiempo de construcción hasta un 50% en comparación con los métodos tradicionales de construcción con estructura de madera. Una construcción más rápida significa menores costos laborales, ocupación anticipada y una menor exposición a retrasos y daños relacionados con el clima."
    },
    {
      title: "Rentable",
      icon: <PiggyBank className="h-6 w-6 text-[#FDC107]" />,
      description: "Aunque los costos iniciales pueden ser ligeramente más altos, las casas SIP ofrecen ahorros a largo plazo.",
      details: "La inversión inicial en la construcción con SIP se compensa con la reducción de costos laborales, tiempos de construcción más rápidos y significativos ahorros energéticos a largo plazo. A lo largo de la vida del edificio, las casas SIP resultan ser más rentables que los métodos de construcción tradicionales. Además, la durabilidad de los SIP significa menores costos de mantenimiento a lo largo del tiempo."
    },
    {
      title: "Duradero",
      icon: <Shield className="h-6 w-6 text-[#FDC107]" />,
      description: "Las estructuras SIP son fuertes y resistentes a varios factores ambientales.",
      details: "La construcción con SIP crea una estructura sólida y unificada que es altamente resistente al viento, terremotos y otras tensiones ambientales. El aislamiento continuo y el menor número de juntas en las estructuras SIP también las hacen menos susceptibles al daño por humedad y al crecimiento de moho. Esta durabilidad se traduce en una mayor vida útil del edificio y menores costos de mantenimiento."
    },
    {
      title: "Versátil",
      icon: <Hexagon className="h-6 w-6 text-[#FDC107]" />,
      description: "Los paneles SIP pueden usarse en diversos diseños arquitectónicos y tipos de edificios.",
      details: "La construcción con SIP es adecuada para una amplia gama de tipos de edificios, desde hogares residenciales hasta estructuras comerciales. Los paneles pueden cortarse con especificaciones precisas, lo que permite diseños arquitectónicos creativos, incluidos muros curvos y techos abovedados. Esta versatilidad hace que los SIP sean una excelente opción tanto para diseños de construcción tradicionales como modernos."
    }
    
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Beneficios del sistema SIP
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre por qué los Paneles Aislados Estructurales están revolucionando la industria de la construcción.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gray-900 border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-[#FDC107] hover:text-[#FDC107]/80">
                      Leer Más
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {benefit.details}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90 inline-flex items-center">
            Conoce más sobre SIP
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}