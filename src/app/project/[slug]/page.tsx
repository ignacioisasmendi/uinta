import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Home, Clock, Ruler, BrickWall, MapPin, Lightbulb, Leaf, ChevronLeft } from 'lucide-react'
import { getProject } from '@/actions/project'
import ImageCarousel from '@/components/landing/carrousel'
import Header from '@/components/landing/header'
import Footer from '@/components/landing/footer'
import image1 from "../../../public/entre-sierras/1.jpg"
import image2 from "../../../public/entre-sierras/2.jpg"
import image4 from "../../../public/entre-sierras/4.jpg"
import image5 from "../../../public/entre-sierras/5.jpg"
import image6 from "../../../public/entre-sierras/6.jpg"
import image7 from "../../../public/entre-sierras/4.jpg"

export default async function ProjectDetail({ params: { slug } }: { params: { slug: string }}) {
  const images = [
    image6, image1, image2, image4, image5, image7
  ]

  const project = await getProject(slug)

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ImageCarousel images={project?.images!} />

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <Calendar className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Duracion</p>
                    <p className="font-semibold">{project?.duration}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <Ruler className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Area total</p>
                    <p className="font-semibold">{project?.area} m²</p>
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
                    <p className="font-semibold">{project?.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300">{project?.description}</p>
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

      </main>

      <Footer/>
    </div>
  )
}