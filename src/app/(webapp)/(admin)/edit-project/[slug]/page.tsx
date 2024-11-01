import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NewProjectForm from "@/components/app/project-form"
import { getProject } from '@/actions/project'



export default async function EditProjectPage({ params: { slug } }: { params: { slug: string }}) {

  const project = await getProject(slug)

  return (
    <div className="container mx-auto px-16 py-8">
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tighter text-center text-gray-900">
            Editar
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* {project ? <NewProjectForm project={project}/> : <p>Proyecto no encontrado</p>}
          <NewProjectForm /> */}
        </CardContent>
      </Card>
    </div>
  )
}