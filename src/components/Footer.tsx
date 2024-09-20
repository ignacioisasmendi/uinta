import Link from "next/link"
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Instagram, Phone, MapPin, Mail, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 border-t border-[#FDC107]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FDC107]">SIP System Homes</h3>
            <p className="text-sm text-gray-400">
              Building energy-efficient, sustainable homes with Structural Insulated Panel technology.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/uintaconstrucciones/" className="text-gray-400 hover:text-[#FDC107]">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FDC107]">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FDC107] flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About SIP Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FDC107] flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FDC107] flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FDC107] flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FDC107] flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-[#FDC107]" />
                <a href="tel:+1234567890" className="hover:text-[#FDC107]">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-[#FDC107]" />
                <a href="mailto:info@sipsystemhomes.com" className="hover:text-[#FDC107]">info@sipsystemhomes.com</a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 mt-1 text-[#FDC107]" />
                <address className="not-italic">
                  123 Eco Street, Green City,<br />Sustainable State 12345
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with our latest projects and SIP technology advancements.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-[#FDC107] text-black hover:bg-[#FDC107]/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SIP System Homes. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-[#FDC107]">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#FDC107]">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#FDC107]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}