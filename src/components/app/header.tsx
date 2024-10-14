import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, User } from "lucide-react"
import logo from "@/public/uinta-logo.svg"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Company Logo"
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      </div>
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input className="pl-10" placeholder="Search projects..." />
        </div>
        <Button className="whitespace-nowrap">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
        <button className="p-2 rounded-full bg-gray-200">
          <User className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  )
}