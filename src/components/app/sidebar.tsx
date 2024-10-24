"use client"
import { ClipboardList, FileText, Home, LogOut, Menu, Plus, Settings, Users, X } from "lucide-react"
import { useState } from "react"
import {logout} from "@/actions/auth"
import Link from "next/link"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="flex h-screen">
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30`}
      >
        <div className="w-64 lg:w-48 bg-white shadow-md flex flex-col items-center py-6 h-full">
          <nav className="flex-1 space-y-8">
            <NavItem href="/home" name="Home" icon={Home} />            
            <NavItem href="/project-listing" name="Obras" icon={ClipboardList} />
            <NavItem href="/new-project" name="Nueva obra" icon={Plus} />
           {/*  <NavItem href="/team" icon={Users} />
            <NavItem href="/reports" icon={FileText} />
            <NavItem href="/settings" icon={Settings} /> */}
            <button 
              className="p-3 rounded-lg hover:bg-gray-100 text-red-600 transition-colors flex items-center w-full"
              onClick={() => {logout()}}
            >
              <LogOut className="h-6 w-6 " />
              <span className="ml-3">
                Salir  
              </span>
          </button>
          </nav>
          
        </div>
      </div>
    </div>
  )
}

function NavItem({ href, name ,icon: Icon }: { href: string; name:string ;icon: React.ComponentType }) {
  return (
    <Link
      href={href}
      className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors flex items-center w-full"
    >
      <Icon/>
      <span className="ml-3">
        {name}
      </span>
    </Link>
  )
}


