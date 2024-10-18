import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import imagePrincipal from "../../public/entre-sierras/principal.png"


export default function Portfolio() {

  const portfolioItems = [
    { id: 1, title: "Entre Sierras", image: imagePrincipal },
    { id: 2, title: "Entre Sierras", image: imagePrincipal },
    { id: 3, title: "Entre Sierras", image: imagePrincipal },
    { id: 4, title: "Entre Sierras", image: imagePrincipal },
    { id: 5, title: "Entre Sierras", image: imagePrincipal },
    { id: 6, title: "Entre Sierras", image: imagePrincipal },    
  ]

  return (
    <section className="w-full px-4 md:px-16 py-12 md:py-24 lg:py-32 bg-black/95">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center mb-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4 md:mb-0">
            Nuestro Portfolio
          </h2>
        </div>
        <div className="w-24 h-1 bg-[#FDC107] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="bg-[#272c2d] border-none overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
{/*                   <p className="text-gray-400 mb-4">{item.description}</p>
 */}                  <Link href={`/project/${item.id}`} passHref>
                    <Button variant="link" className="text-[#FDC107] hover:text-[#FDC107]/80 p-0 group">
                      Ver Proyecto
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
        <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90 flex items-center">
            Ver mas proyectos
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        </div>
      </div>
    </section>
  )
}