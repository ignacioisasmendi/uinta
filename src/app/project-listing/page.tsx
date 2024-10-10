import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default async function ProjectListingPage() {
  const projects = [
    {id:1, name: 'Proyecto 1', duration: 12, people: 10, area: 1000, mainImage: '/placeholder.svg'}, 
    {id:2, name: 'Proyecto 2', duration: 24, people: 20, area: 2000, mainImage: '/placeholder.svg'}, 
    {id:3, name: 'Proyecto 3', duration: 36, people: 30, area: 3000, mainImage: '/placeholder.svg'}
  ]

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uinta-logo-uEFNIKGYyvehNWfwr0gRHN7FGbpTOX.svg"
              alt="Uinta Construcciones Logo"
              width={120}
              height={40}
            />
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex">
                <div className="w-1/3 mr-4">
                  <Image
                    src={project.mainImage || "/placeholder.svg"}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
                <div className="w-2/3">
                  <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Duración: {project.duration} meses</p>
                    <p>Personas: {project.people}</p>
                    <p>Área: {project.area} m²</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}