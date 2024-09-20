"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/shadcn/button"
import { Card, CardContent } from "@/components/shadcn/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import { Calendar, Home, Clock, Ruler, Users, Lightbulb, Leaf, ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import image1 from "../../../public/entre-sierras/1.jpg"
import image2 from "../../../public/entre-sierras/2.jpg"
import image4 from "../../../public/entre-sierras/4.jpg"
import image5 from "../../../public/entre-sierras/5.jpg"
import image6 from "../../../public/entre-sierras/6.jpg"
import image7 from "../../../public/entre-sierras/4.jpg"
import placeHolderImage from "../../../public/placeholder.svg"


export default function ProjectDetail() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    image1, image2, image4, image5, image6, image7
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header></Header>

      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#FDC107] hover:underline mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl font-bold mb-6">Eco Retreat Project</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-video">
            <Image
              src={images[currentImage]}
              alt={`Project image ${currentImage + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
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
                  <Users className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Trabajadores</p>
                    <p className="font-semibold">4-6 people</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center p-4">
                  <Lightbulb className="h-5 w-5 mr-2 text-[#FDC107]" />
                  <div>
                    <p className="text-sm text-gray-400">Ahorro de energia</p>
                    <p className="font-semibold">A+</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300">
              The Eco Retreat project showcases the perfect blend of sustainable living and modern comfort. 
              Built using our advanced SIP system, this home offers exceptional energy efficiency and a 
              reduced carbon footprint without compromising on style or functionality.
            </p>
            <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Request Similar Project</Button>
          </div>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
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
          <TabsContent value="sustainability" className="mt-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-[#FDC107] mt-1" />
                  <div>
                    <h3 className="font-semibold">SIP System Benefits</h3>
                    <p className="text-gray-300">Superior insulation, airtight construction, and reduced thermal bridging result in up to 60% energy savings compared to traditional builds.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 text-[#FDC107] mt-1" />
                  <div>
                    <h3 className="font-semibold">Renewable Energy Integration</h3>
                    <p className="text-gray-300">Roof-mounted solar panels provide clean energy, meeting up to 80% of the home's electricity needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="h-5 w-5 mr-2 text-[#FDC107] mt-1" />
                  <div>
                    <h3 className="font-semibold">Smart Home Technology</h3>
                    <p className="text-gray-300">Integrated systems for climate control, lighting, and energy management optimize resource use and comfort.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="timeline" className="mt-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <ol className="relative border-l border-gray-600 space-y-6">
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-800 bg-[#FDC107]">
                      <Clock className="w-4 h-4 text-black" />
                    </span>
                    <h3 className="font-semibold">Design and Planning</h3>
                    <p className="text-gray-300">2 weeks</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-800 bg-[#FDC107]">
                      <Clock className="w-4 h-4 text-black" />
                    </span>
                    <h3 className="font-semibold">SIP Manufacturing</h3>
                    <p className="text-gray-300">3 weeks</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-800 bg-[#FDC107]">
                      <Clock className="w-4 h-4 text-black" />
                    </span>
                    <h3 className="font-semibold">On-site Assembly</h3>
                    <p className="text-gray-300">4 weeks</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-800 bg-[#FDC107]">
                      <Clock className="w-4 h-4 text-black" />
                    </span>
                    <h3 className="font-semibold">Interior Finishing</h3>
                    <p className="text-gray-300">6 weeks</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-800 bg-[#FDC107]">
                      <Clock className="w-4 h-4 text-black" />
                    </span>
                    <h3 className="font-semibold">Final Touches and Handover</h3>
                    <p className="text-gray-300">1 week</p>
                  </li>
                </ol>
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

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} SIP System Homes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}