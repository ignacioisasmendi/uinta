import { Card, CardContent } from "@/components/ui/card"
import { getProjects } from "@/actions/project"
import { Edit } from "lucide-react"
import Image from "next/image"
import Link from "next/link";


export default async function ProjectListingPage() {
  
  const projects = await getProjects();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex relative">
              <button className="absolute top-4 right-4 hover:text-primary transition-colors">
                <Link href={`/edit-project/${project.id}`}>
                  <Edit className="h-5 w-5" />
                </Link>
                <span className="sr-only">Edit project</span>
              </button>
              <div className="w-1/3 mr-4 relative" style={{ height: '100px' }}>
                <Image 
                  src={project.images[0].url} 
                  alt={project.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="rounded-md object-cover" 
                />
              </div>
              <div className="w-2/3">
                <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Duración: {project.duration} meses</p>
                  <p>Ubicacion: {project.location}</p>
                  <p>Area: {project.area} m²</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}