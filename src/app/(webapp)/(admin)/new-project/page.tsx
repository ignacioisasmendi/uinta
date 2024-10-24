import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NewProjectForm from "@/components/app/project-form"



export default function CreateProjectPage() {

  return (
    <div className="container mx-auto px-16 py-8">
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tighter text-center text-gray-900">
            Crear Nuevo Proyecto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <NewProjectForm />
        </CardContent>
      </Card>
    </div>
  )
}