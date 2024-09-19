import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Home, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/uinta-logo-black.jpg"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#FDC107]/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto flex h-16 justify-between">
          <div className="flex items-center space-x-4">
            <Image src={logo}  width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}  alt="logo"></Image>
{/*             <span className="text-5xl text-[#FDC107] font-bold">Uinta</span>
 */}          </div>
          <nav className="flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Portfolio
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Models
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Contact
            </Link>
            <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Get a Quote</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container mx-auto mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Revolutionary SIP System Homes
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Experience the future of home construction with our innovative Structural Insulated Panel system.
                Efficient, sustainable, and built to last.
              </p>
              <div className="space-x-4">
                <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Explore Models</Button>
                <Button variant="outline" className="border-[#FDC107] text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${i}`}
                    className="object-cover"
                    width={600}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              SIP System Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Energy Efficient", "Quick Construction", "Eco-Friendly", "Cost-Effective", "Durable", "Versatile"].map(
                (benefit) => (
                  <div key={benefit} className="flex items-center space-x-4">
                    <ChevronRight className="h-6 w-6 text-[#FDC107]" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Modern Minimalist", "Eco Retreat", "Urban Oasis", "Family Haven", "Mountain Lodge", "Coastal Dream"].map(
                (model) => (
                  <Card key={model} className="bg-black border-[#FDC107]/20">
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={model}
                      className="object-cover w-full h-48"
                      width={400}
                      height={200}
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{model}</h3>
                      <p className="text-gray-400 mb-4">Experience modern living with our {model.toLowerCase()} design.</p>
                      <Button variant="outline" className="w-full border-[#FDC107] text-[#FDC107] hover:bg-[#FDC107] hover:text-black">
                        View Specs
                      </Button>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-[#111] border-[#FDC107]/20 p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-[#FDC107] text-[#FDC107]" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4">
                    "The SIP System has transformed our home. It's energy-efficient, comfortable, and was built in record time!"
                  </p>
                  <p className="font-medium">- Satisfied Homeowner {i}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Your Dream Home?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Contact us today to learn more about how the SIP System can make your dream home a reality.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-black border-[#FDC107]/20 text-white placeholder:text-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#FDC107]/20 bg-black py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2023 SIP System Homes. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4">
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}