import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" 
import { Button } from "@/components/ui/button"                          
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Zap, Leaf, Clock, PiggyBank, Shield, Hexagon } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Eficiencia Energética",
      icon: <Zap className="h-6 w-6 text-[#FDC107]" />,
      description: "Las viviendas hechas con paneles SIP destacan por su alta eficiencia energética, lo que disminuye considerablemente los gastos de calefacción y refrigeración.",
      details: "La construcción con SIP elimina los puentes térmicos y crea una envolvente hermética. Los paneles SIP 70 tienen un equivalente térmico a 1.20 m de hormigón armado. Esto resulta en una reducción de hasta un 50% en el consumo de energía en comparación con los métodos de construcción tradicionales. Los propietarios pueden esperar facturas de servicios significativamente más bajas."
    },
    {
      title: "Ecológico",
      icon: <Leaf className="h-6 w-6 text-[#FDC107]" />,
      description: "Los materiales sostenibles y la reducción de residuos hacen que las casas SIP sean amigables con el medio ambiente.",
      details: "La mayor parte de un panel SIP está compuesta por madera, un recurso renovable que actúa como reserva de carbono, mientras que solo una pequeña porción es de plástico ya que el 98% del EPS es aire. Para una casa de 100 m², solo se requieren alrededor de 140 kg de plástico. La eficiencia energética que se obtiene con estos paneles resulta en menores emisiones de gases de efecto invernadero a lo largo de la vida útil del edificio, lo que compensa rápidamente su reducida huella de carbono y permite un ahorro continuo durante muchas décadas. Además, la precisión en la fabricación de los SIP disminuye los residuos en el sitio de construcción, lo que minimiza aún más el impacto ambiental."
    },
    {
      title: "Construcción Rápida",
      icon: <Clock className="h-6 w-6 text-[#FDC107]" />,
      description: "La construcción con SIP es más rápida que los métodos tradicionales, ahorrando tiempo y costos laborales.",
      details: "Los paneles SIP se prefabrican fuera del sitio, lo que permite un ensamblaje rápido una vez en el lugar. Ademas resuelven tanto estructura como aislacion térmica en un solo paso. Esto puede reducir el tiempo de construcción hasta un 50% en comparación con los métodos tradicionales. Una construcción más rápida significa menores costos laborales, ocupación anticipada y una menor exposición a retrasos y daños relacionados con el clima."
    },
    {
      title: "Rentable",
      icon: <PiggyBank className="h-6 w-6 text-[#FDC107]" />,
      description: "Las casas construidas con paneles SIP tienen costos competitivos y ofrecen grandes ahorros a largo plazo. ",
      details: "Los paneles SIP ofrecen una solución de construcción que no solo iguala o reduce los costos de las técnicas tradicionales, sino que también permite un ahorro a lo largo de la vida útil de la vivienda."
    },
    {
      title: "Duradero",
      icon: <Shield className="h-6 w-6 text-[#FDC107]" />,
      description: "Las estructuras SIP son fuertes y destacan en la resistencia a los factores ambientales.",
      details: "La construcción con SIP crea una estructura sólida y unificada que es altamente resistente al viento, terremotos y otras tensiones ambientales. Ademas la utilización de materiales complementarios de avanzada tecnología y detalladas técnicas de construcción garantizan una gran durabilidad. El sistema utiliza cámara de aire externa a los paneles perimetrales, lo cual garantiza la correcta respiración de la madera evitando problemas de humedad."
    },
    {
      title: "Versátil",
      icon: <Hexagon className="h-6 w-6 text-[#FDC107]" />,
      description: "Los paneles SIP pueden usarse en diversos diseños arquitectónicos y tipos de edificios.",
      details: "La construcción con SIP es adecuada para una amplia gama de tipos de edificios, desde hogares residenciales hasta estructuras comerciales. Los paneles pueden cortarse con especificaciones precisas, lo que permite diseños arquitectónicos creativos, incluidos muros curvos y techos abovedados. Esta versatilidad hace que los SIP sean una excelente opción tanto para diseños de construcción tradicionales como modernos."
    }
    
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black/90">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-2">
            Beneficios del sistema SIP
          </h2>
          <div className="w-24 h-1 bg-[#FDC107] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubrí por qué los SIP (Structural Insulated Panel) son el futuro y también el presente de la construcción.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#272c2d] border-none">
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
      </div>
    </section>
  )
}