'use client'

import { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Upload, X } from "lucide-react"
import { createProject } from "@/app/actions/admin"
import Image from "next/image"
import Link from "next/link"

export default function CreateProjectPage() {
  const [state, formAction, isPending] = useActionState(createProject, null)

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

      <main className="container mx-auto px-8 py-24">
        <Card className="bg-[#111] border-[#FDC107]/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter text-center">
              Crear Nuevo Proyecto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Nombre del Proyecto</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="text-black border-[#FDC107]/20 placeholder:text-gray-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-white">Duración (meses)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    required
                    className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people" className="text-white">Cantidad de Personas</Label>
                  <Input
                    id="people"
                    name="people"
                    type="number"
                    required
                    className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-white">Área Total (m²)</Label>
                  <Input
                    id="area"
                    name="area"
                    type="number"
                    required
                    className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Descripción del Proyecto</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mainImage" className="text-white">Imagen Principal</Label>
                <Input
                  id="mainImage"
                  name="mainImage"
                  type="file"
                  accept="image/*"
                  required
                  className="bg-primary border-[#FDC107]/20 text-white file:bg-[#FDC107] file:text-black file:border-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="images" className="text-white">Imágenes Adicionales</Label>
                <Input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="bg-primary border-[#FDC107]/20 text-white file:bg-[#FDC107] file:text-black file:border-0"
                />
              </div>
              <Button type="submit" className="w-full bg-[#FDC107] text-black hover:bg-[#FDC107]/90" disabled={isPending}>
                {isPending ? 'Creando Proyecto...' : 'Crear Proyecto'}
              </Button>
            </form>
            {state && (
              <div className={`mt-4 p-4 rounded ${state.success ? 'bg-green-500' : 'bg-red-500'}`}>
                {state.message}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}