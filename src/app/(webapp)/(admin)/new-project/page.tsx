'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { newProject } from "./actions"
import { useFormState } from "react-dom"
import SubmitButton from "@/components/app/submit-button"


export default function CreateProjectPage() {
  const [state, action] = useFormState(newProject, null)

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
            <form action={action} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">Nombre del Proyecto</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-gray-700">Duración (meses)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people" className="text-gray-700">Cantidad de Personas</Label>
                  <Input
                    id="people"
                    name="people"
                    type="number"
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-gray-700">Área Total (m²)</Label>
                  <Input
                    id="area"
                    name="area"
                    type="number"
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-700">Descripción del Proyecto</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mainImage" className="text-gray-700">Imagen Principal</Label>
                <Input
                  id="mainImage"
                  name="mainImage"
                  type="file"
                  accept="image/*"
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900 file:bg-[#FDC107] file:text-white file:border-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="images" className="text-gray-700">Imágenes Adicionales</Label>
                <Input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="bg-gray-50 border-gray-300 text-gray-900 file:bg-[#FDC107] file:text-white file:border-0"
                />
              </div>
              <SubmitButton defaultText="Crear proyecto" pendingText="Creando proyecto" />
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}