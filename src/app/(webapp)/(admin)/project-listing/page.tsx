import { Card, CardContent } from "@/components/ui/card"
import { getProjects } from "@/actions/project"
import Image from "next/image"


export default async function ProjectListingPage() {

  const projects = await getProjects();


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex">
                <div className="w-1/3 mr-4">
                  <Image
                    src={project.images[0].url}
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
                    <p>Ubicacion: {project.location}</p>
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