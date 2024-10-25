"use client"

import { useState } from "react"
import { Hammer, FileText, Phone, Mail, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import Header from "@/components/landing/header"

export default function BudgetRequestForm() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted", { startDate, endDate })
  }

  return (
    <div className="w-full flex flex-col text-white">
      <Header colorDefault="bg-black/95 shadow" colorScroll="bg-black/95 shadow"/>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black/90">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-2">
              Solicitar Presupuesto
            </h2>
            <div className="w-24 h-1 bg-[#FDC107] mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete el formulario a continuación para recibir un presupuesto personalizado para su proyecto de construcción.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#272c2d] border-none col-span-2">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Nombre</Label>
                      <Input id="name" placeholder="Su nombre" required className="bg-[#1c1f20] text-white border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Apellido</Label>
                      <Input id="lastName" placeholder="Su apellido" required className="bg-[#1c1f20] text-white border-gray-700" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="su@email.com" required className="bg-[#1c1f20] text-white border-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Número de Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="123-456-7890" required className="bg-[#1c1f20] text-white border-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white">Ubicación del Proyecto</Label>
                    <Input id="location" placeholder="Ciudad, Estado/Provincia" required className="bg-[#1c1f20] text-white border-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Método de Contacto Preferido</Label>
                    <RadioGroup defaultValue="email">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact" className="text-white">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-contact" />
                          <Label htmlFor="phone-contact" className="text-white">Teléfono</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="text-contact" />
                          <Label htmlFor="text-contact" className="text-white">Mensaje de texto</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">Descripción del Proyecto</Label>
                    <Textarea
                      id="description"
                      placeholder="Describa brevemente su proyecto, incluyendo tipo de construcción, tamaño aproximado, y cualquier detalle relevante..."
                      required
                      className="bg-[#1c1f20] text-white border-gray-700 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="files" className="text-white">Archivos del Proyecto (opcional)</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="files"
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        className="bg-[#1c1f20] text-white border-gray-700 file:bg-[#FDC107] file:text-black file:border-0 file:px-4 file:py-2 file:rounded-md file:hover:bg-[#FDC107]/90 file:cursor-pointer"
                      />
                    </div>
                    {files && (
                      <div className="text-sm text-gray-400">
                        {Array.from(files).map((file, index) => (
                          <div key={index}>{file.name}</div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-[#FDC107] text-black hover:bg-[#FDC107]/90">
                    <Hammer className="w-4 h-4 mr-2" />
                    Solicitar Presupuesto
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-[#272c2d] border-none">
              <CardContent className="py-6">
                <h3 className="text-xl font-semibold mb-4 text-[#FDC107]">Información Adicional</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 mr-2 text-[#FDC107] flex-shrink-0 mt-1" />
                    <span className="text-gray-400">Aceptamos planos, fotos y otros documentos en formatos PDF, DWG, JPG, o PNG. Tamaño máximo por archivo: 10MB.</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-2 text-[#FDC107] flex-shrink-0 mt-1" />
                    <span className="text-gray-400">Nos pondremos en contacto dentro de 48 horas hábiles para discutir su proyecto.</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 mr-2 text-[#FDC107] flex-shrink-0 mt-1" />
                    <span className="text-gray-400">Recibirá una copia de su solicitud en el correo electrónico proporcionado.</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-2 text-[#FDC107] flex-shrink-0 mt-1" />
                    <span className="text-gray-400">La ubicación del proyecto nos ayuda a considerar factores locales en nuestra estimación.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}