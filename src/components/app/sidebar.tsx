"use client"
import { ClipboardList, FileText, Home, LogOut, Menu, Plus, Settings, Users, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
            <NavItem href="/home" icon={Home} />            
            <NavItem href="/project-listing" icon={ClipboardList} />
            <NavItem href="/new-project" icon={Plus} />
            <NavItem href="/team" icon={Users} />
            <NavItem href="/reports" icon={FileText} />
            <NavItem href="/settings" icon={Settings} />
          </nav>
          <button className="mt-auto p-3 rounded-lg hover:bg-red-100 text-red-600 transition-colors">
            <LogOut className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

function NavItem({ href, icon: Icon }: { href: string; icon: React.ComponentType }) {
  return (
    <Link
      href={href}
      className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors flex items-center w-full"
    >
      <Icon/>
      <span className="ml-3">
        {href.charAt(1).toUpperCase() + href.slice(2)}
      </span>
    </Link>
  )
}


