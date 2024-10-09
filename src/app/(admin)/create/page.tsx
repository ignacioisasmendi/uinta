'use client'

import { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Upload, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createProject } from "./actions"



export default function CreateProjectPage() {
  const [state, formAction, isPending] = useActionState(createProject)

  return (
    <div className="min-h-screen bg-primary text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uinta-logo-uEFNIKGYyvehNWfwr0gRHN7FGbpTOX.svg"
            alt="Uinta Construcciones Logo"
            width={150}
            height={50}
          />
        </Link>
        <Link href="/" className="text-[#FDC107] hover:text-[#FDC107]/80 flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter text-center text-gray-900">
              Crear Nuevo Proyecto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
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
              {/* <Button type="submit" className="w-full bg-[#FDC107] text-white hover:bg-[#FDC107]/90" disabled={isPending}>
                {isPending ? 'Creando Proyecto...' : 'Crear Proyecto'}
              </Button> */}
            </form>
            {/* {state && (
              <div className={`mt-4 p-4 rounded ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {state.message}
              </div>
            )} */}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}