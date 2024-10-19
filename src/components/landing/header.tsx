'use client'

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/Logo cd.2.png"
import { useState, useEffect } from 'react'

type Props = {
  colorDefault: string;
  colorScroll: string;
};

export default function Header({ colorDefault, colorScroll }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleScroll()
    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const headerColor = isScrolled ? colorScroll : colorDefault

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 md:transition-colors md:duration-300 ${headerColor} ${isMobile && isMenuOpen ? '!bg-black/95 ' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Uinta construcciones logo" className="w-auto h-36" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link className={`text-xl font-medium hover:underline-[#FDC107]`} href="#">
              Nosotros
            </Link>
            <Link className={`text-xl font-medium hover:underline-[#FDC107]`} href="#">
              Portfolio
            </Link>
            <Link className={`text-xl font-medium hover:underline-[#FDC107]`} href="#">
              Contacto
            </Link>
            <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90" variant="secondary">Solicitar cotizacion</Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden shadow border-t-[#FDC107] ${isMobile ? colorScroll : 'bg-black/95'}`}>
          <nav className="flex flex-col items-center space-y-9 py-4">
            <Link className="text-lg font-medium hover:underline" href="#">
              Nosotros
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              Portfolio
            </Link>
            <Link className="text-lg font-medium hover:underline" href="#">
              Contacto
            </Link>
            <Button className="bg-[#FDC107] text-black" variant="secondary">Solicitar cotizacion</Button>
          </nav>
        </div>
      )}
    </header>
  )
}