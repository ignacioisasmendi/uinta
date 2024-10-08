'use client'

import { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Upload } from "lucide-react"
import { createProject } from "@/actions/admin"
import Image from "next/image"
import Link from "next/link"

export default function CreateProjectPage() {
  //const [state, formAction, isPending] = useActionState(createProject, null)

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
        <Card className="max-w-2xl mx-auto bg-white shadow-md">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl font-bold tracking-tight text-center">
              Crear Nuevo Proyecto
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form  className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del Proyecto</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración (meses)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    required
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people">Cantidad de Personas</Label>
                  <Input
                    id="people"
                    name="people"
                    type="number"
                    required
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Área Total (m²)</Label>
                  <Input
                    id="area"
                    name="area"
                    type="number"
                    required
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descripción del Proyecto</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mainImage">Imagen Principal</Label>
                <Input
                  id="mainImage"
                  name="mainImage"
                  type="file"
                  accept="image/*"
                  required
                  className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="images">Imágenes Adicionales</Label>
                <Input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
             {/*  <Button type="submit" className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors" disabled={isPending}>
                {isPending ? 'Creando Proyecto...' : 'Crear Proyecto'}
              </Button> */}
            </form>
            {/* {state && (
              <div className={`mt-6 p-4 rounded ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {state.message}
              </div>
            )} */}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}