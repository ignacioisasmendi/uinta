"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type ImageCarouselProps = {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
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

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-video cursor-pointer overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-cover bg-center blur-md scale-110" style={{ backgroundImage: `url(${image})` }} />
                  <div className="relative aspect-video flex items-center justify-center">
                    <Image
                      src={image}
                      fill
                      alt={`Project image ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[75vw] max-h-[75vh] p-0">
                <div className="relative aspect-video cursor-pointer overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-cover bg-center blur-md scale-110" style={{ backgroundImage: `url(${images[selectedImageIndex ?? index]})` }} />
                  <div className="relative aspect-video flex items-center justify-center">
                    <Image
                      src={images[selectedImageIndex ?? index]}
                      alt={`Project image ${(selectedImageIndex ?? index) + 1}`}
                      fill
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
                    onClick={handlePreviousImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
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
  )
}