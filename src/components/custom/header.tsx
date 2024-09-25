'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/uinta-logo.svg"


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return(
    <header className="sticky top-0 z-50 w-full border-b border-[#FDC107]/20 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="w-full flex px-4 md:px-16 h-16 justify-between ">
        <div>
          <Image src={logo} className="w-auto h-16" alt="logo"></Image>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:text-[#FDC107] transition-colors" href="#">
            Contacto
          </Link>
          <Button className="bg-[#FDC107] text-black hover:bg-[#FDC107]/90">Solicitar cotizacion</Button>
        </nav>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#">
              Nosotros
            </Link>
            <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#">
              Portfolio
            </Link>
            <Link className="text-sm font-medium hover:text-secondary transition-colors" href="#">
              Contacto
            </Link>
            <Button className="bg-secondary text-primary-foreground hover:bg-secondary/90">Solicitar cotizacion</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

