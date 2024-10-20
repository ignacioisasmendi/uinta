"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Home, Clock, Ruler, BrickWall, MapPin, Lightbulb, Leaf, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Header from '@/components/landing/header'
import Footer from '@/components/landing/footer'
import image1 from "../../../public/entre-sierras/1.jpg"
import image2 from "../../../public/entre-sierras/2.jpg"
import image4 from "../../../public/entre-sierras/4.jpg"
import image5 from "../../../public/entre-sierras/5.jpg"
import image6 from "../../../public/entre-sierras/6.jpg"
import image7 from "../../../public/entre-sierras/4.jpg"
import placeHolderImage from "../../../public/placeholder.svg"

export default function ProjectDetail() {
  const images = [
    image6, image1, image2, image4, image5, image7
  ]

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length)
    }
  }

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)
    }
  }

  const timelineSteps = [
    { title: "Design and Planning", duration: "2 weeks" },
    { title: "SIP Manufacturing", duration: "3 weeks" },
    { title: "On-site Assembly", duration: "4 weeks" },
    { title: "Interior Finishing", duration: "6 weeks" },
    { title: "Final Touches and Handover", duration: "1 week" },
  ]

  return (
    <div className="min-h-screen bg-black/90 text-white">
      <Header colorDefault="bg-black/95 shadow" colorScroll="bg-black/95 shadow"/>

      <main className="container mx-auto px-4 py-24">
        <Link href="/" className="inline-flex items-center text-[#FDC107] hover:underline mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver a Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Entre Sierras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-video cursor-pointer overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-cover bg-center blur-md scale-110" style={{ backgroundImage: `url(${image.src})` }} />
                        <div className="relative aspect-video flex items-center justify-center">
                          <Image
                            src={image}
                            alt={`Project image ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[75vw] max-h-[75vh] p-0">
                      <div className="relative aspect-video cursor-pointer overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-cover bg-center blur-md scale-110" style={{ backgroundImage: `url(${images[selectedImageIndex ?? index].src})` }} />
                        <div className="relative aspect-video flex items-center justify-center">
                          <Image
                            src={images[selectedImageIndex ?? index]}
                            alt={`Project image ${(selectedImageIndex ?? index) + 1}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedImageIndex(i)}
                              className={`w-12 h-12 rounded-md overflow-hidden border-2 ${i === (selectedImageIndex ?? index) ? 'border-[#FDC107]' : 'border-transparent'}`}
                            >
                              <Image
                                src={images[i]}
                                alt={`Thumbnail ${i + 1}`}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => handlePreviousImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={() => handleNextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                        >
                          <ChevronRight className="h-6 w-6"/>
                        </button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white" />
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white" />
          </Carousel>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <Calendar className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Duracion</p>
                    <p className="font-semibold">3 meses</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <Ruler className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Area total</p>
                    <p className="font-semibold">250 m²</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <BrickWall className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Sistema constructivo</p>
                    <p className="font-semibold">SIP</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <MapPin className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Ubicacion</p>
                    <p className="font-semibold">Tandil, Buenos Aires</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300">
              The Eco Retreat project showcases the perfect blend of sustainable living and modern comfort. 
              Built using our advanced SIP system, this home offers exceptional energy efficiency and a 
              reduced carbon footprint without compromising on style or functionality.
            </p>
          </div>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="timeline">Project Timeline</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Open-concept living area with floor-to-ceiling windows</li>
                  <li>Gourmet kitchen with energy-efficient appliances</li>
                  <li>Master suite with private balcony and eco-friendly ensuite</li>
                  <li>Two additional bedrooms and shared bathroom</li>
                  <li>Home office/flex space for remote work or guests</li>
                  <li>Outdoor living area with sustainable landscaping</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="timeline" className="mt-4">
            <Card className="bg-gray-800 border-gray-700 overflow-x-auto">
              <CardContent className="p-6">
                <div className="relative">
                  <ol className="relative flex justify-between min-w-max">
                    {timelineSteps.map((step, index) => (
                      <li key={index} className="flex flex-col items-center relative px-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FDC107] ring-4 ring-gray-800 z-10">
                          <Clock className="w-6 h-6 text-black" />
                        </span>
                        <div className="mt-4 text-center">
                          <h3 className="font-semibold text-white">{step.title}</h3>
                          <p className="text-gray-300 text-sm">{step.duration}</p>
                        </div>
                        {index < timelineSteps.length - 1 && (
                          <div className="absolute top-6 left-1/2 w-full h-1 bg-[#FDC107]" />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">More Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gray-800 border-gray-700">
                <Image
                  src={placeHolderImage}
                  alt={`Related Project ${i}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">SIP Project {i}</h3>
                  <p className="text-sm text-gray-400 mb-4">A brief description of the project and its unique features.</p>
                  <Button variant="outline" className="w-full border-[#FDC107] text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}