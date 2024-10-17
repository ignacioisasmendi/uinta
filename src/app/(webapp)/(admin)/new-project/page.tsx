import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NewProjectForm from "@/components/app/project-form"



export default function CreateProjectPage() {

  return (
    <div className="min-h-screen bg-primary text-white">
      <main className="container mx-auto px-4 py-12">
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
      </main>
    </div>
  )
}